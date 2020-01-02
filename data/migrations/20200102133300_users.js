exports.up = function(knex, Promise) {
    // create the users tables
    return knex.schema.createTable('users', function(tbl) {
        // user id (primary key)
        tbl.increments(); // creates an id (if you don't pass anything here the default name of the column will be 'id'), makes it integer, makes it autoincrement
        // external id
        //tbl
        //  .placeholder('ext_id', 128) //External ID from auth service

        //user first name
        tbl
            .string('firstName', 128)
        
        //user last name
        tbl
            .string('lastName', 128)
        //user avatar
        tbl
            .string('avatar', 256)
            .defaultTo(null)
            
        //user display name
        tbl
            .string('displayName', 128)
            .notNullable()
        //user bio
        tbl
            .string('bio', 1000)
            .notNullable()
        //user tagline
        tbl
            .string('tagline', 280)
            .notNullable()
        
        //user email
        tbl
            .string('email', 128)
            .notNullable()
            .unique()
        
        //createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now())
        

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
