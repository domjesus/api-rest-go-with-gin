package main

import (
	"bytes"
	"fmt"
	"log"

	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/routes"
	// _ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	var buf bytes.Buffer
	logger := log.New(&buf, "logger: ", log.Lshortfile)

	if err := database.ConectaComBancoDeDados(logger); err != nil {
		fmt.Printf("Error: %s", err)

	}

	routes.HandleRequests(logger)

}
