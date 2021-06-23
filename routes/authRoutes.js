import { Router } from "express";
import passport from "passport";

const authRoute = Router();
authRoute.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

authRoute.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/surveys");
    }
);
authRoute.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
authRoute.get("/api/current_user", (req, res) => {
    res.send(req.user);
});

export default authRoute;
