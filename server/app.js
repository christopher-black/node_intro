// Module that makes routing easier
var express = require('express');

var app = express();
var port = 5000;

// Looks for index.html by default (http://localhost:5000/)
app.use(express.static('server/public'));

app.listen(port);

console.log("Listening on port ", port);
