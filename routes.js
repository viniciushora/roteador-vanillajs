const fs = require('fs');

const routes = {
    default: function(res) {
      res.setHeader("Content-Type", "text/html")
      res.setHeader("Access-Control-Allow-Origin", "*")
      fs.readFile("index.html", (err, data) => {
        res.end(data)
        return
        })
    },
    rota2: function(res) {
      res.setHeader("Content-Type", "text/html")
      res.setHeader("Access-Control-Allow-Origin", "*")
      fs.readFile("index2.html", (err, data) => {
        res.end(data)
        return
        })
    },
    notFound: function(res) {
      res.setHeader("Content-Type", "text/html")
      res.setHeader("Access-Control-Allow-Origin", "*")
      fs.readFile("404.html", (err, data) => {
        res.end(data)
        return
        })
    }
  }

module.exports = routes
