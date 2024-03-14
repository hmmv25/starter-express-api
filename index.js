const createError = require('http-errors');
const express = require('express')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const xmlparser = require('express-xml-bodyparser');
const app = express()
const http = require('https');
const debug = require('debug')('myapp:server');

var xml2jsRouter = require('./routes/xml2js');

var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

var server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(xmlparser());

app.use('/', xml2jsRouter);

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo 12345678')
})

//app.listen(process.env.PORT || 3000)

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
