const { sequelize } = require("../models");
const db = require("../models");
const User = db.user;
const Penerima = db.penerima;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("");
  };
  
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };