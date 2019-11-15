var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var routes = require('./routes/user')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/saleDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/user/', routes);


http.createServer(app).listen(port);



console.log("Server running on port: ", port);