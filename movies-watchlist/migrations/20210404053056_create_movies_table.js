
exports.up = function(knex) {
return knex.schema.createTable('movies', table => {
    table.integer('id')
    table.string('title')
    table.integer('year')
    table.string('overview')
    table.decimal('rating')
})  
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
