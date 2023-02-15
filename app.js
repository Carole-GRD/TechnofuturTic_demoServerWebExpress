// Config variables d'environnement
require('dotenv').config();

// Import express
const express = require('express');

// Création du serveur
const app = express();

// Import du module router
const router = require('./routes');
// Utilisation du router dans notre application
app.use(router);


// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
})