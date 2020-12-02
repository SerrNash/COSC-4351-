var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
const { response } = require('express');
const { get } = require('http');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/',function(request,response){
    response.render('HomePage');
});

app.post('/authentication',function(request,response){
    console.log(request.body);
    response.render('Authentication');
});

app.post('/admin_role',function(request,response){
    console.log(request.body);
    var first_letter_username = request.body.username[0];
    if(first_letter_username == '1'){
        response.render('Support');
    }
    else if(first_letter_username == '2'){
        response.render('Finance');
    }
    else if(first_letter_username == '3'){
        response.render('Sales');
    }
    else if(first_letter_username == '4'){
        response.render('hrAdmin');
    }
    else if(first_letter_username == '5'){
        response.render('techAdmin');
    }
    else{
        response.redirect('/');
    }
});

app.listen('5000');



