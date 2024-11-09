const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json("Authorization header missing");
    }

    const token = authHeader.split(' ')[1];
    try {
        const jwtResponse = jwt.verify(token, 'supersecrectkey12345');
        req.payload = jwtResponse.userId; // Assuming token contains `userId`
        next();
    } catch (err) {
        res.status(401).json("Authorization failed, please login");
    }
};

module.exports = jwtMiddleware;
