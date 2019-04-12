module.exports = {
  host: "127.0.0.1",
  username: "postgres",
  password: "docker",
  database: "postgres",
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
};
