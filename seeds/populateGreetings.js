exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Harrison', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnhRbgXzroZ7BiaWprn04fCASz8w73TrnZx_WP5FpBxwyoo0IL0a0ZKsg', characteristic_id: 1},
        {id: 2, name: 'JV', image_url: 'data:image/jpeg;base64,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', characteristic_id: 2},
        {id: 3, name: 'Sarah', image_url: 'http://i.imgur.com/FaU3wne.jpg', characteristic_id: 3}
      ]);
    });
};
