
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // id: primary key, unique, not null, integers that auto-increment
    table.increments();
    // VIN: unique, not null, text
    table.text('VIN').unique().notNullable();
    // Make: not null, text
    table.text('Make').notNullable();
    // Model: not null, text
    table.text('Model').notNullable();
    // Mileage: not null, integer
    table.integer('Mileage').notNullable();
    // Transmission_Type: text
    table.text('Transmission_Type');
    // Title_State: text
    table.text('Title_State');
  });
};

exports.down = function(knex) {
  // write this first
  return knex.schema.dropTableIfExists('cars');
};
