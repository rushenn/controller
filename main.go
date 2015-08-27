package main

import (
	"net/http"
	"fmt"
)

func main() {
	fmt.Println("Listening at http://localhost:8080")
	if err := http.ListenAndServe(":8080", http.FileServer(Assets)); err !=nil {
		fmt.Println(err)
	}
}

