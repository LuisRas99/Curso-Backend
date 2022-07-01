const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let db = new sqlite3.Database('proyecto-backend');

app.post('/pendientes', function(req,res){
    db.run("INSERT INTO task(description) VALUES('Meseroooooooo')");
    res.send('Inserción finalizada');
});



app.listen(3000);

process.on('SIGINT',function () {
    console.log('El servidor no esta disponible regrese mañana y con un buen lonche de bisteck para el administrador');
    db.close();
    process.exit();
})