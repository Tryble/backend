const knex = require("knex");
const { dbUrl, env } = require("../config");
const knexfile = require("../knexfile");

const configOptions = knexfile[env];

// module.exports = knex({
//   client: "pg",
//   searchPath: ["knex", "public"],
//   connection: dbUrl,
//   migrations: {
//     directory: "./data/migrations"
//   },
//   seeds: { directory: "./data/seeds" },

//   useNullAsDefault: true
// });

module.exports = knex(configOptions);
