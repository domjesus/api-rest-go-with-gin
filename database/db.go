package database

import (
	"github.com/domjesus/api-go-gin/models"
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
	// stringDeConexao := "host=" + os.Getenv("DATABASE_HOST") + " user=" + os.Getenv("DATABASE_USER") + " password=" + os.Getenv("DATABASE_PASSWORD") + " dbname=" + os.Getenv("DATABASE_NAME") + " port=5432 sslmode=require"

	stringDeConexao := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"
	DB, err = gorm.Open(postgres.Open(stringDeConexao))
	if err != nil {
		return err
	}
	DB.AutoMigrate(&models.Aluno{})

	l.Info("DB connected")

	return nil
}
