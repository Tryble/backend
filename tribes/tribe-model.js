const db = require("../data");

const create = tribe => {
  return db("tribes").insert(tribe, "*");
};

const update = (id, updatedTribe) => {
  return db("tribes")
    .where({ id })
    .update(updatedTribe, "*");
};

const list = () => {
  return db("tribes");
};

const remove = id => {
  return db("tribes")
    .where({ id })
    .del();
};
module.exports = {
  create,
  update,
  list,
  remove
};
