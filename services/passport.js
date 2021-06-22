import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import keys from "../config/keys.js";
import userModel from "../models/User.js";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userModel.findById(id).then((user) => done(null, user));
});

passport.use(
    new Strategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            proxy: true,
        },
        (req, acessToken, requestToken, profile, done) => {
            // console.log(profile);
            userModel.findOne({ googleId: profile.id }).then((foundRecord) => {
                if (foundRecord) {
                    // console.log(foundRecord);
                    // console.log(done);
                    done(null, foundRecord);
                } else {
                    // console.log("not found");
                    new userModel({
                        googleId: profile.id,
                        userName: profile.displayName,
                    })
                        .save()
                        .then((user) => done(null, user));
                }
            });
        }
    )
);
