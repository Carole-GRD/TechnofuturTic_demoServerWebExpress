
const routerMiddleware = (req, res, next) => {
    console.log(`Je suis passé par ici et l'url était ${ req.url }`);
    next();
}

module.exports = routerMiddleware;