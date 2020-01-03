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

const tribesByUser = userId => {
  return db("user_tribes as T")
    .where({ userId })
    .join("tribes", "tribes.id", "=", "T.tribeId");
};
module.exports = {
  create,
  update,
  list,
  remove,
  tribesByUser
};
