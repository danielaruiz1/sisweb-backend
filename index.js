const express = require('express') // recibe la libreria express, las funciones se llaman con parentesis
const morgan = require('morgan')

import apiRouter from './src/routes';

const app = express() // inicializa el express(), le devuelve el servidor a app
const port = 3030 // el puerto en el que se va a levantar

app.use(morgan('dev')) // usa la aplicacion morgan con el minimo de developer
app.use(express.json());
app.use(apiRouter);

// callback: una funcion dentro de otra
app.listen(port, () => { // puerto por el que la app escucha
 console.log(`Example app listening on port ${port}`)
})
