const express = require('express');

const app = express();

app.use('/assets',express.static('assets'));

app.get('/', function(req,res){
    res.sendFile('index.html',{
       root: __dirname 
    });
    //res.sendFile(__dirname);
});

app.listen(3000);