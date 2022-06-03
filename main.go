package main

import (
	"fmt"
	"time"

	"github.com/domjesus/api-go-gin/database"
	"github.com/domjesus/api-go-gin/routes"
	"go.uber.org/zap"
	// _ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	logger, _ := zap.NewProduction()
	defer logger.Sync() // flushes buffer, if any
	sugar := logger.Sugar()
	sugar.Infow("failed to fetch URL",
		// Structured context as loosely typed key-value pairs.
		"url", "URL-XPTO",
		"attempt", 3,
		"backoff", time.Second,
	)
	sugar.Infof("Logger working fine ")

	if err := database.ConectaComBancoDeDados(sugar); err != nil {
		fmt.Printf("Error: %s", err)

	}

	routes.HandleRequests(sugar)

}
