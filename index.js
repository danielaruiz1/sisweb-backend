const express = require('express') // recibe la libreria express, las funciones se llaman con parentesis
const db = require('./src/models')
const morgan = require('morgan')

import apiRouter from './src/routes';

const app = express() // inicializa el express(), le devuelve el servidor a app
const port = 3030 // el puerto en el que se va a levantar

db.sequelize.sync()
 .then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
 });

/* db.sequelize.sync({ force: true }).then(() => {
console.log("Drop and re-sync db.");
}); */

app.use(morgan('dev')) // usa la aplicacion morgan con el minimo de developer
app.use(express.json());
app.use(apiRouter);

// callback: una funcion dentro de otra
app.listen(port, () => { // puerto por el que la app escucha
 console.log(`Example app listening on port ${port}`)
})
