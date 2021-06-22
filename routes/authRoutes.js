import { Router } from "express";
import passport from "passport";

const authRoute = Router();
authRoute.get(
    "/auth",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

authRoute.get(
    "/auth/google/callback",
    passport.authenticate("google")
    // (req, res) => {
    //     res.send("<h1>hellow</h1>");
    //     res.end();
    // }
);
authRoute.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
});
authRoute.get("/api/user", (req, res) => {
    res.send(req.user);
    // res.end("hellow");
});

export default authRoute;
