import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";
import keys from "../config/keys.js";
import userModel from "../models/User.js";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userModel.findById(id).then((user) => done(null, user));
});

passport.use(
    new googleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            proxy: true,
        },
        async (req, acessToken, requestToken, profile, done) => {
            const foundRecord = await userModel.findOne({
                googleId: profile.id,
            });
            if (foundRecord) return done(null, foundRecord);

            const user = await new userModel({
                email: profile.emails[0].value,
                profileImage: profile.photos[0].value,
                googleId: profile.id,
                userName: profile.displayName,
            }).save();
            done(null, user);
        }
    )
);
