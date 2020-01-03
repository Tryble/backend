const db = require("../data");

    const 

    const newTribe = tribe => {
        return db("users").insert(tribe, "*");
    }
    module.exports = { newTribe, }