const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 3000;

module.exports = { dbUrl, port };
