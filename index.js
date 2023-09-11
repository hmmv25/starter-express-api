const express = require('express')
const app = express()

var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

var server = http.createServer(app);

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
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


server.listen(port);
