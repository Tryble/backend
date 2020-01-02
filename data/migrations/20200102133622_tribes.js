exports.up = function(knex, Promise) {
    // create the tribes tables
    return knex.schema.createTable('tribes', function(tbl) {
        // tribe id (primary key)
        tbl.increments(); // creates an id (if you don't pass anything here the default name of the column will be 'id'), makes it integer, makes it autoincrement
        
        //tribe logo
        tbl
            .string('logo', 256)
            .defaultTo(null)
            
        //tribe name
        tbl
            .string('name', 128)
            .notNullable()
        
        
        //createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now())
        

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tribes');
};