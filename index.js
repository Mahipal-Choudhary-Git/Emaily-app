import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";

import keys from "./config/keys.js";
import "./services/passport.js";
import authRoute from "./routes/authRoutes.js";

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(cookieSession({ maxAge: 60 * 60 * 1000, keys: [keys.cookieKey] }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});
