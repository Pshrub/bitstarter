var express = require('express');
var fs = require('fs');
-- var buf = require('buf');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var txt = fs.readFileSync('index.html');
  var buftxt = new Buffer(txt,"utf-8");
  response.send(buftxt);
--  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
