const Server = require('./server');

const routes = require('./routes')
const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

const servidor = new Server(port)

servidor.ligarServidor()