const { User } = require('../models/user');

let auth = (req, res, next) => {
    let token = req.cookies.auth;

    User.findByToken(token, (err, user) => {
        if (err) console.log(err);
        if (!user) return res.json({
            isAuth: false, error: true
        });

        req.token = token;
        req.user = user;

        next();
    })
}

module.exports = { auth };