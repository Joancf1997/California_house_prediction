const express = require('express');
const router = require('./src/routes/routes');
const morgan = require("morgan");
require('dotenv').config();


// Servidor 
const app = express()

// allow cors header
app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", ["*"]); // ACTUALIZAR PARA UNICAMENTE ACEPTAR PETICIONES DEL DOMINIO
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

// Middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json())
app.use(router)

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`Project app listening on port: ${port}`)
})




