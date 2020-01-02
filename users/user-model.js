const db = require("../data");

const findByEmail = email => {
  return db("users")
    .where({ email })
    .first();
};

const findById = id => {
  return db("users")
    .where({ id })
    .first();
};

const create = data => {
  return db("users").insert(data, "*");
};

module.exports = { create, findByEmail, findById };
