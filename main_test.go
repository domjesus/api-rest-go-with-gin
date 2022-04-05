package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/domjesus/api-go-gin/controllers"
	"github.com/gin-gonic/gin"
)

func SetupDasRotasDeTeste() *gin.Engine {
	rotas := gin.Default()
	return rotas
}

func TestVerificaSaudacao(t *testing.T) {
	r := SetupDasRotasDeTeste()
	r.GET("/:nome", controllers.Saudacoes)
	req, _ := http.NewRequest("GET", "/josedasilva", nil)
	resp := httptest.NewRecorder()

	r.ServeHTTP(resp, req)

	if resp.Code != http.StatusOK {
		t.Fatalf("Status error: valor recebido foi %d e o espero era %d", resp.Code, http.StatusOK)
	}
}
