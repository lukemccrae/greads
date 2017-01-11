exports.up = function(knex, Promise) {
    return knex.schema.createTable('book', table => {
        table.increments();
        table.text('title').notNullable();
        table.text('genre');
        table.integer('author_1_first_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.integer('author_1_last_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.integer('author_2_first_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.integer('author_2_last_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.integer('author_3_first_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.integer('author_3_last_name')
            .references('author.id')
            .unsigned()
            .notNullable();
        table.text('description');
        table.text('cover_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book');
};
