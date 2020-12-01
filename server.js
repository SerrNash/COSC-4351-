var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
const { response } = require('express');
const { get } = require('http');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/',function(request,response){
    response.render('HomePage');
});

app.post('/authentication',function(request,response){
    console.log(request.body);
    response.render('Authentication');
});

app.listen('5000');



