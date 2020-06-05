
exports.up = function(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('guid').unique();
    table.string('title');
    table.string('link');
    table.string('isoDate');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};
