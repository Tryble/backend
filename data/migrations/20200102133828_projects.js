exports.up = function(knex, Promise) {
    // create the projects tables
    return knex.schema.createTable('projects', function(tbl) {
        // tribe id (primary key)
        tbl.increments(); // creates an id (if you don't pass anything here the default name of the column will be 'id'), makes it integer, makes it autoincrement
        
        //project logo
        tbl
            .string('logo', 256)
            .defaultTo(null)
            
        //project name
        tbl
            .string('name', 128)
            .notNullable()
        
        //tribe
        //tbl.integer('tribeId').references('id').inTable('tribes').onDelete('CASCADE');
        
        //createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now())
        
        //deadline
        tbl
            .timestamp('deadline')
            .notNullable()
        

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};