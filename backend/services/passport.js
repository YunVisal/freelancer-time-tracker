const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();

const {User} = require("../models");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

passport.use(new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, cb) => {
        const user = await User.findOne({where: {providerId: profile.id}});
        if(!user){
            const newUser = await User.create({providerId: profile.id, email: profile.emails[0].value});
            cb(null, newUser);
        }
        else {
            cb(null, user);
        }
    }
));