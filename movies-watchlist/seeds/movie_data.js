
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 550, title: 'Fight Club', year: 1999, rating: 8.4},
        {id: 111, title: 'Movie 2', year: 2021, rating: 1.1},
        {id: 303, title: 'Hairspray', year: 1970, rating: 3.0}
      ]);
    });
};

