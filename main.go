package main

import (
	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/routes"
)

func main() {
	database.ConectaComBancoDeDados()

	routes.HandleRequests()

}
