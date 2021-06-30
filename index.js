import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";

import keys from "./config/keys.js";
import "./services/passport.js";
import authRoute from "./routes/authRoutes.js";
import billingRoute from "./routes/billingRoute.js";
import surveyRoutes from "./routes/surveyRoutes.js";
//mongodb connection establish.......
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// initiating  express app......
const app = express();
//body-parsers......
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookie-session integration.....
app.use(cookieSession({ maxAge: 60 * 60 * 1000, keys: [keys.cookieKey] }));
//passport integraton.........
app.use(passport.initialize());
app.use(passport.session());
//defined Routes.....
app.use("/", billingRoute);
app.use("/", surveyRoutes);
app.use("/", authRoute);
//react integation for development........
if (process.env.NODE_ENV === "production") {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
// starting express server at below port.......
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});
