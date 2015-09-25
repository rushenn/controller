package main

//go:generate go-bindata-assetfs dist/...
//go:generate gsed -i s/Css/CSS/g bindata_assetfs.go
//go:generate gsed -i s/Html/HTML/g  bindata_assetfs.go
//go:generate gofmt -s -w -l bindata_assetfs.go
