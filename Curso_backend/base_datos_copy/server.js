const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const sequelize = new Sequelize('proyecto-backend',null,null, {
    dialect: 'sqlite',
    storage: './proyecto-backend'

});

app.post('/pendientes', function(req,res){
    //db.run(`INSERT INTO task(description) VALUES(?)`,req.body.description);
    res.send('Inserción finalizada');
});



app.listen(3000);

