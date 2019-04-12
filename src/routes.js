const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Leonardo",
  email: "leo@teste.com",
  password_hash: "83409824498023"
});

//Definição das rotas

module.exports = routes;
