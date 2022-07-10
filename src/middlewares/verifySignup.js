const User = require("../models/user");

checkDuplicateUsername = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Nombre de usuario en uso" });
      return;
    }
    next();
  });
};

const verifySignUp = {
    checkDuplicateUsername
};

module.exports = verifySignUp;