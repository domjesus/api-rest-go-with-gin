package routes

import (
	"net/http"

	"github.com/domjesus/api-go-gin/controllers"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func HandleRequests(l *zap.SugaredLogger) {
	r := gin.Default()
	// r.HTMLRender = loadTemplates("./templates")
	// r.HTMLRender = loadTemplates("./dist")

	r.LoadHTMLFiles("./dist/index.html")

	// r.LoadHTMLGlob("templates/*")
	// html := template.Must(template.ParseFiles("templates/index.html"))
	// r.SetHTMLTemplate(html)

	r.Static("/js", "./dist/js")
	r.Static("/css", "./dist/css")

	// r.Static("/dist/assets", "dist/assets")

	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"*"}

	// r.GET("/:nome", controllers.Saudacoes)
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})
	r.GET("/aluno_create", controllers.AlunoCreate)
	r.GET("/alunos_listar", controllers.ListaAlunos)
	r.GET("/alunos", controllers.ExibeTodosAlunos)
	// r.GET("/", controllers.Home)
	r.GET("/outro", controllers.Outro)
	r.GET("/alunos/:id", controllers.ExibeUmAluno)
	r.POST("/alunos", controllers.CriaNovoAluno)
	r.DELETE("/alunos/:id", controllers.DeletaUmAluno)
	r.PATCH("/alunos/:id", controllers.EditaAluno)
	r.GET("/alunos/cpf/:cpf", controllers.BuscaAlunoPorCPF)

	//router.LoadHTMLFiles("templates/template1.html", "templates/template2.html")
	// r.NoRoute(controllers.RouteNotFound)

	// log.Fatal(http.ListenAndServe(":8001", handlers.CORS(handlers.AllowedOrigins([]string{"*"}))(r)))
	// r.Use(cors.New(config))
	// r.Use(cors.Default())
	l.Info("Routes done")

	r.Run()
	// r.Run(":8000")

}

// func loadTemplates(templatesDir string) multitemplate.Renderer {
// 	r := multitemplate.NewRenderer()

// 	layouts, err := filepath.Glob(templatesDir + "/*.html")
// 	if err != nil {
// 		panic(err.Error())
// 	}

// includes, err := filepath.Glob(templatesDir + "/includes/*.html")
// if err != nil {
// 	panic(err.Error())
// }

// Generate our templates map from our layouts/ and includes/ directories
// for _, include := range includes {
// 	layoutCopy := make([]string, len(layouts))
// 	copy(layoutCopy, layouts)
// 	files := append(layoutCopy, include)
// 	r.AddFromFiles(filepath.Base(include), files...)
// }
// return r
// }
