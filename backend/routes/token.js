const jwt = require("jsonwebtoken");

const {UserToken} = require("../models");

module.exports = app => {
    app.get("/verify", async (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        jwt.verify(
            cookies?.jwt,
            process.env.REFRESH_TOKEN_SECRET,
            (err) => {
                if(err) return res.sendStatus(400);
                res.sendStatus(200);
            }
        )
    });
    
    app.get("/refresh", async (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;
    
        const foundUser = await UserToken.findOne({where: {refreshToken}});
        if(!foundUser) return res.sendStatus(404);
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if(err || foundUser.dataValues.userId !== parseInt(decoded.userId)) return res.sendStatus(400);
                const accessToken = jwt.sign(
                    { userId: decoded.userId },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '1m' }
                );
                res.status(200).json({ accessToken });
            }
        )
    });
}