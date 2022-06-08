package controllers

import (
	"fmt"
	"net/http"

	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/models"
	"github.com/gin-gonic/gin"
)

func Saudacoes(c *gin.Context) {
	nome := c.Param("nome")

	c.JSON(http.StatusOK, gin.H{
		"API diz": "E aí " + nome + " baum?",
	})
}

func ExibeTodosAlunos(c *gin.Context) {
	var alunos []models.Aluno

	database.DB.Find(&alunos)

	c.JSON(200, alunos)
}

func ExibeUmAluno(c *gin.Context) {
	id := c.Params.ByName("id")
	var aluno models.Aluno

	database.DB.Find(&aluno, id)

	// c.JSON(http.StatusOK, aluno)
	if aluno.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Registro não encontrado!",
		})
		return
	}

	c.JSON(http.StatusOK, aluno)

	// c.HTML(http.StatusOK, "index.html", gin.H{
	// 	"nome": aluno.Nome,
	// })

}

func CriaNovoAluno(c *gin.Context) {
	var aluno models.Aluno

	if err := c.ShouldBind(&aluno); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	if err := models.ValidaDadosDealunos(&aluno); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	database.DB.Create(&aluno)

	c.JSON(http.StatusOK, gin.H{
		"data":  "Aluno criado com sucesso!",
		"aluno": aluno,
	})

	// c.Request.URL.Path = "/alunos_listar"
	// c.Redirect(301, "/aluno_create")
}

func DeletaUmAluno(c *gin.Context) {
	var aluno models.Aluno
	id := c.Params.ByName("id")

	database.DB.First(&aluno, id)

	fmt.Println("Aluno: ", aluno)
	if aluno.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"data": "Aluno não encontrado!"})
		return
	}

	database.DB.Delete(&aluno, id)

	c.JSON(http.StatusOK, gin.H{
		"data": "Aluno deletado com sucesso!"})
}

func EditaAluno(c *gin.Context) {
	var aluno models.Aluno
	id := c.Params.ByName("id")

	database.DB.First(&aluno, id)

	if err := c.ShouldBindJSON(&aluno); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	if err := models.ValidaDadosDealunos(&aluno); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	database.DB.Model(&aluno).UpdateColumns(aluno)

	c.JSON(http.StatusOK, aluno)

}

func BuscaAlunoPorCPF(c *gin.Context) {
	var aluno models.Aluno

	cpf := c.Param("cpf")
	database.DB.Where(&models.Aluno{CPF: cpf}).First(&aluno)

	if aluno.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Registro não encontrado!",
		})
		return
	}

	c.JSON(http.StatusOK, aluno)

}

func Home(c *gin.Context) {
	var alunos []models.Aluno

	database.DB.Find(&alunos)

	c.HTML(http.StatusOK, "index.html", gin.H{
		"alunos": alunos,
	})

}

func Outro(c *gin.Context) {
	var alunos []models.Aluno

	database.DB.Find(&alunos)

	c.HTML(http.StatusOK, "index2.html", gin.H{
		"alunos": alunos,
	})

}

func RouteNotFound(c *gin.Context) {
	c.HTML(http.StatusNotFound, "404.html", nil)
}

func ListaAlunos(c *gin.Context) {
	var alunos []models.Aluno

	database.DB.Find(&alunos)

	c.HTML(200, "alunos.html", gin.H{
		"alunos": alunos,
	})
}

func AlunoCreate(c *gin.Context) {
	var alunos []models.Aluno

	database.DB.Find(&alunos)

	c.HTML(200, "aluno_create.html", nil)
}
