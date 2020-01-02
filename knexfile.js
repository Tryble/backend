// Update with your config settings.
const { dbUrl } = require("./config");

module.exports = {
  development: {
    client: "pg",
    connection: dbUrl,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  testing: {
    client: "pg",
    connection: dbUrl,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "pg",
    connection: dbUrl,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
