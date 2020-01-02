exports.up = function (knex, Promise) {
    return knex.schema.createTable('invitations', function (tbl) {
        tbl.integer('userId').references('id').inTable('users').onDelete('CASCADE');
        tbl.integer('tribeId').references('id').inTable('tribes').onDelete('CASCADE');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex, Promise) {
    // drop the usersTribesInvitations table
    return knex.schema.dropTableIfExists('invitations');
};