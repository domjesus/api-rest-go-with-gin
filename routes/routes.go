package routes

import (
	"log"
	"net/http"

	"github.com/domjesus/api-go-gin/controllers"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/handlers"
)

func HandleRequests() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.Static("/assets", "./assets")

	// r.Static("/dist/assets", "dist/assets")

	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"*"}

	r.GET("/:nome", controllers.Saudacoes)
	r.GET("/alunos", controllers.ExibeTodosAlunos)
	r.GET("/", controllers.Home)
	r.GET("/alunos/:id", controllers.ExibeUmAluno)
	r.POST("/alunos", controllers.CriaNovoAluno)
	r.DELETE("/alunos/:id", controllers.DeletaUmAluno)
	r.PATCH("/alunos/:id", controllers.EditaAluno)
	r.GET("/alunos/cpf/:cpf", controllers.BuscaAlunoPorCPF)

	//router.LoadHTMLFiles("templates/template1.html", "templates/template2.html")
	r.NoRoute(controllers.RouteNotFound)

	// log.Fatal(http.ListenAndServe(":8001", handlers.CORS(handlers.AllowedOrigins([]string{"*"}))(r)))
	// r.Use(cors.New(config))
	// r.Use(cors.Default())

	r.Run()

}
