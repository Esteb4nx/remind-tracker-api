const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No hay token!" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Acceso restringido!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
    verifyToken
};
module.exports = authJwt;