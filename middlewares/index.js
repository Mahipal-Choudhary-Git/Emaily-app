export const requireLogin = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({ error: "You Have to Login To Access Api" });
    }
    next();
};

export const requireCredits = (req, res, next) => {
    if (req.user.credits < 1) {
        res.status(402).send({ error: "Not Enough Credits" });
    }
    next();
};
