exports.up = function(knex) {
  return knex.schema.createTable("user_tribes", table => {
    table
      .integer("userId")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("tribeId")
      .unsigned()
      .references("id")
      .inTable("tribes")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_tribes");
};
