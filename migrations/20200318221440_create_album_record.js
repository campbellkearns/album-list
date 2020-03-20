
exports.up = function(knex, Promise) {
  return knex.schema.createTable('album', (table) => {
    table.increments();
    table.string('artist');
    table.string('album_name');
    table.string('genre');
    table.integer('stars');
    table.boolean('explicit');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('album');
};
