

const appMiddleware = (req, res, next) => {
    const today = new Date();
    console.log(`New request at ${ today.getHours() }:${ today.getMinutes() }:${ today.getSeconds() } on url : ${ req.url }`);
    next();   // Permet de continuer la requête
}

module.exports = appMiddleware;