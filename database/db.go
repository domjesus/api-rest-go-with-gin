package database

import (
	"fmt"
	"os"

	"github.com/domjesus/api-go-gin/models"
	"github.com/joho/godotenv"
	"go.uber.org/zap"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	err error
)

func ConectaComBancoDeDados(l *zap.SugaredLogger) error {

	// stringDeConexao := os.Getenv("DATABASE_URL")
	err := godotenv.Load()
	if err != nil {
		l.Error("Error loading .env file")
	}
	env := os.Getenv("ENV")

	var stringDeConexao string
	fmt.Println("Ambiente: ", env)

	if env != "local" {
		stringDeConexao = "host=" + os.Getenv("DATABASE_HOST") + " user=" + os.Getenv("DATABASE_USER") + " password=" + os.Getenv("DATABASE_PASSWORD") + " dbname=" + os.Getenv("DATABASE_NAME") + " port=5432 sslmode=require"
	} else {
		stringDeConexao = "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"
	}

	DB, err = gorm.Open(postgres.Open(stringDeConexao))
	if err != nil {
		return err
	}
	DB.AutoMigrate(&models.Aluno{})

	l.Info("DB connected")

	return nil
}
