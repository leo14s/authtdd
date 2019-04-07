const express = require("express");

class AppControler {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.unescape(express.JSON());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppControler().express;
