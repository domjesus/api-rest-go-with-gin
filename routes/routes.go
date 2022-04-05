package routes

import (
	"github.com/domjesus/api-go-gin/controllers"
	"github.com/gin-gonic/gin"
)

func HandleRequests() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")

	r.GET("/:nome", controllers.Saudacoes)
	r.GET("/alunos", controllers.ExibeTodosAlunos)
	r.GET("/", controllers.Home)
	r.GET("/aluno/:id", controllers.ExibeUmAluno)
	r.POST("/aluno", controllers.CriaNovoAluno)
	r.DELETE("/aluno/:id", controllers.DeletaUmAluno)
	r.PATCH("/aluno/:id", controllers.EditaAluno)
	r.GET("/alunos/cpf/:cpf", controllers.BuscaAlunoPorCPF)
	//router.LoadHTMLFiles("templates/template1.html", "templates/template2.html")

	r.Run()

}
