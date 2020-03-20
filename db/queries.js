const knex = require('./knex')

module.exports = {
  readAll: function() {
    return knex('album');
  }
}