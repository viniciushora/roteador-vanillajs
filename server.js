let url = require('url');
const http = require('http');
const routes = require('./routes')

class Server {
  constructor(port) {
    this.port = port
  }
  ligarServidor(){
    const server = http.createServer(function(req, res) {
      let parsedURL = url.parse(req.url, true)
      let path = parsedURL.pathname
      path = path.replace(/^\/+|\/+$/g, "")
      if (path == ""){
        path = "default"
      }
      let route = typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"]
      route(res)
    } )
    server.listen(this.port, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`)
    })
  }
}

module.exports = Server