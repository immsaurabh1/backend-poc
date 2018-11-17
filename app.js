// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// initialize our express app
Users = require('./models/user.model')
const app = express();
let port = 6789;

//connect to mongodb
mongoose.connect('mongodb://localhost/voyzdb', { useNewUrlParser: true });
var db= mongoose.connection;

app.get('/',function(req,res){
    res.send('Please use1 /api/books');
})
app.get('/api/users',function(req,res){
    Users.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    })
})
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});