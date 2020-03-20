
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert([
        {
          artist: 'Aaliyah',
          album_name: 'One In A Million',
          genre: 'R&B',
          stars: 5,
          explicit: false
        },
        {
          artist: 'Led Zeppelin',
          album_name: 'Led Zeppelin II',
          genre: 'Classic Rock',
          stars: 5,
          explicit: false
        }
      ]);
    });
};
