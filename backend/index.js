const express = require('express');
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();

const app = express()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

passport.use(new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log(profile)
        //cb(accessToken, refreshToken, profile);
    }
))

app.get("/", (req, res) => {
    res.json({message: "hello world!"});
})

app.get("/auth/google", passport.authenticate('google', { scope: ['profile'] }));

app.get(
    "/auth/google/callback", 
    passport.authenticate('google'),
    (req, res) => {
        console.log("hello")
        res.redirect("/auth/google/success");
    }
)

app.get("/auth/google/success", (req, res) => {
    res.send({message: "Authentication with google success"});
})

app.get("/auth/google/fail", (req, res) => {
    res.send({message: "Authentication with google failed"});
})

// passport.serializeUser((user, done) => {
//     console.log("serialize");
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     console.log("deserialize");
//     done(null, id);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})