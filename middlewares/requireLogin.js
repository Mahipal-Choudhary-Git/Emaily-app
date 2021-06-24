export default (req, res, next) => {
    if (!req.user) {
        res.status(401).send({ error: "You Have to Login To Access Api" });
    }
    next();
};
