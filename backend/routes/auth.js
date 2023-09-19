const passport = require('passport');
const jwt = require('jsonwebtoken');

const {UserToken} = require("../models");

module.exports = app => {
    app.get("/auth/google", passport.authenticate('google', { scope: ['profile', "email"] }));

    app.get(
        "/auth/google/callback", 
        passport.authenticate('google', {session: false}),
        (req, res) => {
            res.redirect(`/auth/google/success?userId=${req.user.dataValues.id}`);
        }
    );

    app.get("/auth/google/success", async (req, res) => {
        const userId = req.query.userId;
        const refreshToken = jwt.sign(
            {userId},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        await UserToken.update({isValid: false}, {where: {userId}});
        await UserToken.create({userId, refreshToken });
        const cookieMaxAge = 24 * 60 * 60 * 1000; // 1 day
        res.cookie("jwt", refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: cookieMaxAge });
        res.redirect(302, process.env.EXTERNAL_APP_CALLBACK_URL);
    });
}