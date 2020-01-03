const db = require("../data");

    const create = tribe => {
        return db("tribes").insert(tribe, "*");
    }

    const update = tribe  => {
        return db("tribes").where({ id })
        .update(changes, "*")
    }

    const list = tribe  => {
        return db("tribes");
    }

    const remove = tribe => {
        return db("tribes").where({ id }).del();
    }
    module.exports = { create, update, list, remove }