const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DB_URL;

module.exports = { dbUrl };
