const User = require("../models/user");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.getUsers = (req, res)=>{
  //obtener todos los usuarios
    User
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
};

exports.getUserById= (req,res)=>{
  const {id} = req.params;
  User
      .findById(id)
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message:error}));
};