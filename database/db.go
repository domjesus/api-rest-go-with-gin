package database

import (
	"fmt"
	"log"
	"os"

	"github.com/domjesus/api-go-gin/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	err error
)

func ConectaComBancoDeDados() {

	// stringDeConexao := os.Getenv("DATABASE_URL")
	stringDeConexao := "host=" + os.Getenv("DATABASE_HOST") + " user=" + os.Getenv("DATABASE_USER") + " password=" + os.Getenv("DATABASE_PASSWORD") + " dbname=" + os.Getenv("DATABASE_NAME") + " port=5432 slmode=verify-full "
	DB, err = gorm.Open(postgres.Open(stringDeConexao))
	if err != nil {
		log.Panic("Erro ao conectar com banco de dados")
	}
	DB.AutoMigrate(&models.Aluno{})

	fmt.Println("Conectado com sucesso: ", DB)
}
