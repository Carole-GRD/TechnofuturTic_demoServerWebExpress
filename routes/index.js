
const router = require('express').Router();

// Import du router-lvl middleware
const routerMiddleware = require('../middlewares/router.middleware');
// Sur toutes les routes auxquelles je l'ai ajouté, il sera déclenché
// route.method(url, middleware, () => {})


// Gestion des routes
// router.get('/', homeController.home_get)
router.get('/', (req, res) => {
    console.log('Home GET');
    // res.end('Bonjour');
    let data = { id: 1, pseudo: 'Caro', msg: 'Salut tout le monde' };
    // res.status(200).send(JSON.stringify(data));    // -> string
    res.status(200).json(data);                       // -> json
});
router.get('/contact', routerMiddleware, (req, res) => {
    console.log('Contact GET');
});
router.post('/contact', (req, res) => {
    console.log('Contact POST');
});
router.get('/about', (req, res) => {
    console.log('About GET');
    throw new Error('Kaboum 💣');
});
router.get('/fans', routerMiddleware, (req, res) => {
    // fans est un segment statique
    console.log('Page affichant la liste de tous les fans');
});
router.get('/fans/:id([0-9]{1,5})', (req, res) => {
    // Pour récupérer l'id dans les paramètres et les réutiliser dans le code :
    const { id } = req.params;
    console.log(`Page affichant le fan dont l'id est : ${id}`);

    // #region Parenthèses destructuring
    // const person = {
    //     idPerson : 1,
    //     firstname : 'Carole',
    //     lastname : 'Gérard'
    // }
    // const { idPerson, lastname } = person;
    // console.log(lastname);
    // #endregion
});
// Si aucune des routes précédentes (Attention à TOUJOURS mettre en dernier, puisque reprend toutes les routes définies avant) :
router.get('*', (req, res) => {
    console.log('Routes inconnue ! 404');
})

module.exports = router;