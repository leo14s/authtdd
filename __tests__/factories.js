const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: "Leonardo",
  email: "leo@test.com",
  password: "123456"
});

module.exports = factory;
