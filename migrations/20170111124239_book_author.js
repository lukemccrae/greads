exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_author', table => {
        knex.schema.table('users', function(table) {
            table.integer('book_id').references('book.id').unsigned().onDelete('cascade');
            table.integer('author_id').references('author.id').unsigned().onDelete('cascade');
        })
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book_author');
};
