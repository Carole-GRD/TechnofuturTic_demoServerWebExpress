
const errorMiddleware = (err, req, res, next) => {
    console.log(`Une erreur est survenue : ${err}`);
    res.sendStatus(500);
}

module.exports = errorMiddleware;