const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConection = require('express-myconnection');
//importando rutas
const customerRoutes = require('./routes/customer');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(myConection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Prueba1234',
    port: 3306,
    database: 'pruebanode'
},'single'))


//router
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));


//Start Server
app.listen(app.get('port'),()=>{
    console.log('conectadop');
});