var express = require('express');
var app = new express();

app.use(express.static('public'));

app.get('/',function(req,res) {
  res.sendfile("./main/main.html");
});

app.listen(3000);
