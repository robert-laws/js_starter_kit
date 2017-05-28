var express = require('express')
var app = express()
var port = 8080

var webdom = require('./webdom.js')

app.listen(port, function () {
  console.log('app started')
})

app.get('/index.html', function (req, res) {
  res.send('Hello World')
})

app.use(express.static('public'))