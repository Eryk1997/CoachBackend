require("dotenv").config();

let jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  //const authHeader = req.headers.authorization;
  //const token = authHeader.split(" ")[1];
  const token = req.headers.cookie.slice(4);
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.UNICATE_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
