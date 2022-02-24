const jwt = require('jsonwebtoken');


const authJWT = (req, res, next) => {
    const authHeader = req.header
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split("/")[1]

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403)
            }
            req.user = user
            next()
        })
    } else {
        res.status(400)
    }
}

module.exports = authJWT