package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strconv"
	"testing"

	"github.com/domjesus/api-go-gin/controllers"
	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/models"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

var ID int

func SetupDasRotasDeTeste() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	rotas := gin.Default()
	return rotas
}

func CriaAlunoMock() {
	aluno := models.Aluno{Nome: "Nome do Aluno teste", CPF: "12345678912", RG: "123456789"}
	database.DB.Create(&aluno)
	ID = int(aluno.ID)
}

func DeletaAlunoMock() {
	var aluno models.Aluno
	database.DB.Delete(&aluno, ID)
}

func TestVerificaSaudacao(t *testing.T) {
	r := SetupDasRotasDeTeste()
	r.GET("/:nome", controllers.Saudacoes)
	req, _ := http.NewRequest("GET", "/josedasilva", nil)
	resp := httptest.NewRecorder()

	r.ServeHTTP(resp, req)

	assert.Equal(t, http.StatusOK, resp.Code, "Status deveriam ser iguais!")

	mockResposta := `{"API diz":"E aí josedasilva baum?"}`
	respostaBody, _ := ioutil.ReadAll(resp.Body)
	assert.Equal(t, mockResposta, string(respostaBody))

	// fmt.Println(mockResposta)
	// fmt.Println(string(respostaBody))
}

func TestListandoTodosOsAlunosHandler(t *testing.T) {
	database.ConectaComBancoDeDados()
	CriaAlunoMock()
	defer DeletaAlunoMock()
	r := SetupDasRotasDeTeste()
	r.GET("/alunos", controllers.ExibeTodosAlunos)

	req, _ := http.NewRequest("GET", "/alunos", nil)
	resp := httptest.NewRecorder()

	r.ServeHTTP(resp, req)
	assert.Equal(t, http.StatusOK, resp.Code)
	// fmt.Println(resp.Body) // EXIBE OS DADOS DO BD

}

func TestBuscaAlunoPorCpf(t *testing.T) {
	database.ConectaComBancoDeDados()
	// CriaAlunoMock()
	// defer DeletaAlunoMock()
	r := SetupDasRotasDeTeste()
	r.GET("/alunos/cpf/:cpf", controllers.BuscaAlunoPorCPF)

	req, _ := http.NewRequest("GET", "/alunos/cpf/8754215421", nil)
	resp := httptest.NewRecorder()

	r.ServeHTTP(resp, req)
	assert.Equal(t, http.StatusOK, resp.Code)

}

func TestBuscaAlunoPorIDHandler(t *testing.T) {

	database.ConectaComBancoDeDados()
	CriaAlunoMock()
	defer DeletaAlunoMock()
	r := SetupDasRotasDeTeste()
	r.GET("/alunos/:id", controllers.ExibeUmAluno)

	req, _ := http.NewRequest("GET", "/alunos/"+strconv.Itoa(ID), nil)
	resp := httptest.NewRecorder()

	r.ServeHTTP(resp, req)
	var alunoMock models.Aluno
	json.Unmarshal(resp.Body.Bytes(), &alunoMock)
	fmt.Println(alunoMock.Nome)

	assert.Equal(t, "Nome do Aluno teste", alunoMock.Nome, "Nomes não são iguais.")
	assert.Equal(t, "12345678912", alunoMock.CPF, "CPFs não são iguais. ")
	assert.Equal(t, "123456789", alunoMock.RG, "RG não são iguais")
}

func TestIncluirNovoAluno(t *testing.T) {
	database.ConectaComBancoDeDados()
	r := SetupDasRotasDeTeste()

	aluno := []byte(`{"Nome": "Jose da Silva Sauro", "CPF": "12345612344", "RG": "321654989"}`)

	r.POST("/alunos", controllers.CriaNovoAluno)

	req, _ := http.NewRequest("POST", "/alunos", bytes.NewBuffer(aluno))
	req.Header.Set("Content-Type", "application/json")

	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	fmt.Println("Aluno criado: ", resp.Body)
	var alunoMock models.Aluno
	json.Unmarshal(resp.Body.Bytes(), &alunoMock)
	ID = int(alunoMock.ID)
	DeletaAlunoMock()

	assert.Equal(t, http.StatusOK, resp.Code, "Status incluindo novo aluno são diferentes")

}

func TestDeletaAlunoHandler(t *testing.T) {
	database.ConectaComBancoDeDados()

	CriaAlunoMock()

	r := SetupDasRotasDeTeste()

	r.DELETE("/alunos/:id", controllers.DeletaUmAluno)

	pathDeBusca := "/alunos/" + strconv.Itoa(ID)

	req, _ := http.NewRequest("DELETE", pathDeBusca, nil)

	resposta := httptest.NewRecorder()

	r.ServeHTTP(resposta, req)

	assert.Equal(t, http.StatusOK, resposta.Code)
}

func TestEditaAlunoHandler(t *testing.T) {
	database.ConectaComBancoDeDados()

	CriaAlunoMock()

	defer DeletaAlunoMock()

	r := SetupDasRotasDeTeste()
	r.PATCH("/alunos/:id", controllers.EditaAluno)

	aluno := models.Aluno{Nome: "Nome do Aluno teste", CPF: "99988877744", RG: "999888777"}

	valorJson, _ := json.Marshal(aluno)

	pathParaEditar := "/alunos/" + strconv.Itoa(ID)

	req, _ := http.NewRequest("PATCH", pathParaEditar, bytes.NewBuffer(valorJson))

	resposta := httptest.NewRecorder()

	r.ServeHTTP(resposta, req)

	var alunoMockAtualizado models.Aluno

	json.Unmarshal(resposta.Body.Bytes(), &alunoMockAtualizado)

	assert.Equal(t, "99988877744", alunoMockAtualizado.CPF)
	assert.Equal(t, "999888777", alunoMockAtualizado.RG)
	assert.Equal(t, "Nome do Aluno teste", alunoMockAtualizado.Nome)

	fmt.Println(alunoMockAtualizado.CPF)

}
