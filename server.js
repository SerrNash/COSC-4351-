var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
const { response } = require('express');
const { get } = require('http');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'XASDASDA'}));
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');
var session_master;

app.get('/',function(request,response){
    session_master = request.session;
    response.render('HomePage');
});

app.post('/authentication',function(request,response){
    session_master.admin_role = request.body.Admin_Role;
    console.log(session_master.admin_role);
    response.render('Authentication');
});

app.post('/admin_role',function(request,response){
    console.log(request.body);
    var first_letter_username = request.body.username[0];
    console.log(first_letter_username);
    if(first_letter_username == '1' && session_master.admin_role == 'Support'){
        console.log('here');
        response.render('Support');
    }
    else if(first_letter_username == '2' && session_master.admin_role == 'Finance'){
        response.render('Finance');
    }
    else if(first_letter_username == '3' && session_master.admin_role == 'Sales'){
        response.render('Sales');
    }
    else if(first_letter_username == '4' && session_master.admin_role == 'Human Resources'){
        response.render('hrAdmin');
    }
    else if(first_letter_username == '5' && session_master.admin_role == 'Technology'){
        response.render('techAdmin');
    }
    else{
        response.redirect('/');
    }
});

app.get('*', function(request, response){
    response.redirect('/');
});

app.listen('5000');


