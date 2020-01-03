exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      // id
      table.increments("id");
      // firstName
      table.string("firstName", 30).notNullable();
      // lastName
      table.string("lastName", 30).notNullable();
      // email
      table
        .string("email", 50)
        .unique()
        .notNullable();
      // password
      table.string("password", 128).notNullable();
      // imgUrl
      table.string("imgUrl", 128);
    })
    .createTable("tribes", table => {
      // id
      table.increments("id");
      // name
      table
        .string("name", 50)
        .unique()
        .notNullable();
      // imgUrl
      table.string("imgUrl", 128);
    })
    .createTable("projects", table => {
      // id
      // name
      table.string("name", 50).notNullable();
      table.increments("id");
      // tribeId
      table
        .integer("tribeId")
        .references("id")
        .inTable("tribes")
        .onDelete("CASCADE");
      // upvotes
      table.integer("upvotes").defaultTo(0);
      // headline
      table.string("headline", 280);
      // description
      table.text("description");
      // status
      table.string("status", 30).defaultTo("open");
      table.string("tags");
    })
    .createTable("roles", table => {
      // id
      table.increments("id");
      // title
      table.string("title", 50).notNullable();
      // projectId
      table
        .integer("projectId")
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
      // numberNeeded
      table.integer("numberNeeded").defaultTo(1);
      // numberTaken
      table.integer("numberTaken").defaultTo(0);
    })
    .createTable("requests", table => {
      // id
      table.increments("id");
      // projectId
      table
        .integer("projectId")
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
      // userId
      table
        .integer("userId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      // roleId
      table
        .integer("roleId")
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE");
      // message
      table.text("message");
      // status
      table.string("status", 30).defaultTo("pending");
    })
    .createTable("images", table => {
      // id
      table.increments("id");
      // projectId
      table
        .integer("projectId")
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
      // imgUrl
      table.string("imgUrl", 128);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("images")
    .dropTableIfExists("requests")
    .dropTableIfExists("roles")
    .dropTableIfExists("projects")
    .dropTableIfExists("tribes")
    .dropTableIfExists("users");
};
