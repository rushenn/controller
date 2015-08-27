package main

import (
	"log"
	"net/http"

	"github.com/elazarl/go-bindata-assetfs"
)

func main() {
	log.Println("Listening at http://localhost:8080")

	if err := http.ListenAndServe(":8080", http.FileServer(
		&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, Prefix: "dist"})); err != nil {
		log.Fatalln(err)
	}
}
