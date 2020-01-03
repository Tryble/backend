exports.up = function(knex) {
  knex.schema
    .createTable("users", table => {
      table.increments();
      table.string("firstName", 30).notNullable();
      table.string("lastName", 30).notNullable();
      table
        .string("email", 50)
        .unique()
        .notNullable();
      table.string("password", 50).notNullable();
      table.string("imgUrl", 128);
    })
    .createTable("tribes", table => {
      table.increments();
      table
        .string("name", 50)
        .unique()
        .notNullable();
      table.string("imgUrl", 128);
    })
    .createTable("projects", table => {
      table.increments();
      table
        .integer("tribeId")
        .references("tribes.id")
        .notNullable()
        .onDelete("CASCADE");
      table.integer("upvotes").defaultTo(0);
      table.string("name", 50).notNullable();
      table.string("headline", 280);
      table.text("description", 1000);
      table.string("status", 30).defaultTo("open");
      table.enum("tags");
    })
    .createTable("roles", table => {
      table.increments();
      table
        .integer("projectId")
        .references("projects.id")
        .notNullable()
        .onDelete("CASCADE");
      table.string("title", 50).notNullable();
      table
        .integer("numberNeeded")
        .notNullable()
        .defaultTo(1);
      table
        .integer("numberTaken")
        .notNullable()
        .defaultTo(0);
    })
    .createTable("requests", table => {
      table.increments();
      table
        .integer("projectId")
        .references("projects.id")
        .notNullable()
        .onDelete("CASCADE");
      table
        .integer("userId")
        .references("users.id")
        .notNullable();
      table.text("message");
      table
        .integer("roleId")
        .references("roles.id")
        .notNullable()
        .onDelete("CASCADE");
      table.text("message");
      table
        .string("status", 30)
        .notNullable()
        .defaultTo("pending");
    })
    .createTable("images", table => {
      table.increments();
      table
        .integer("projectId")
        .references("projects.id")
        .notNullable()
        .onDelete("CASCADE");
      table.string("imgUrl", 128);
    });
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("images")
    .dropTableIfExists("requests")
    .dropTableIfExists("roles")
    .dropTableIfExists("projects")
    .dropTableIfExists("tribes")
    .dropTableIfExists("users");
};
