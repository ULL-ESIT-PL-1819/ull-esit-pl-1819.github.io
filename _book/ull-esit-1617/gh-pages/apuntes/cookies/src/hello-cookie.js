// https://www.codementor.io/noddy/cookie-management-in-express-js-du107rmna
var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());

app.get('/cookie',function(req, res){
     res.cookie('cookie_name', 'cookie_value', {expire : new Date() + 9999}).send(
       "Cookie is set: goto to browser's console and write document.cookie.");
});

app.get('/', function(req, res) {
  res.send("visit localhost:8080/cookie")
});

app.get('/show', function(req, res) {
  console.log("Cookies :  ", req.cookies);
  res.send("Cookies :  "+util.inspect(req.cookies));
});

app.get('/clearcookie', function(req,res){
     res.clearCookie('cookie_name');
     res.send('Cookie deleted');
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
