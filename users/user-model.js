const db = require("../data");

const getUser = () => db("users");

module.exports = { getUser };
