const knex = require("knex");
const { env } = require("../config");
const knexfile = require("../knexfile");

const configOptions = knexfile[env];

module.exports = knex(configOptions);
