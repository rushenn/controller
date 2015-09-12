## Controller console

## Install

```
$ git clone https://github.com/minio/controller
$ npm install
$ npm install -g gulp
$ gulp serve

```

For minified js and css

```
$ gulp --production serve
```

Open your browser at http://localhost:8000

### Testing with golang http server

```
$ go get github.com/jteeuwen/go-bindata/...
$ go get github.com/elazarl/go-bindata-assetfs/...

$ go generate ./...
$ go run assets.go main.go
```

Open your browser at http://localhost:8080