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
server.listen(port);
