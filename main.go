package main

import (
	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/routes"
	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	database.ConectaComBancoDeDados()

	routes.HandleRequests()

}
