var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var msgBuf = fs.readFileSync("index.html");
  var msgStr = msgBuf.toString();
  response.send(msgStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
