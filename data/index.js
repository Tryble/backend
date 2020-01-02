const knex = require("knex");
const { dbUrl } = require("../config");

module.exports = knex({
  client: "pg",
  connection: dbUrl,
  searchPath: ["knex", "public"],
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
});
