// Config variables d'environnement
require('dotenv').config();

// Import de notre app-middleware
const appMiddleware = require('./middlewares/app.middleware');
// Import de notre error-handler middleware
const errorMiddleware = require('./middlewares/error.middleware');

// Import express
const express = require('express');

// Création du serveur
const app = express();

// Utilisation du app-lvl middleware
app.use(appMiddleware);

// Import du module router
const router = require('./routes');
// Utilisation du router dans notre application
app.use(router);


// Error-handler middleware :
// À TOUJOURS METTRE EN DERNIER NIVEAU DE LA STACK D'APPEL
app.use(errorMiddleware);


// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
})