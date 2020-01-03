const db = require("../data");

const create = projectInfo => {
  return db("projects").insert(projectInfo, "*");
};

const update = (id, updatedProject) => {
  return db("projects")
    .where({ id })
    .update(updatedProject, "*");
};

const list = () => {
  return db("projects");
};

const remove = id => {
  return db("projects")
    .where({ id })
    .del();
};
module.exports = {
  create,
  update,
  list,
  remove
};
