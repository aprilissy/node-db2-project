
exports.seed = function(knex) {
  // Truncate the db to reset those ids
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '5GZCZ23DX3S826679', Make: 'Pontiac', Model: 'GTO', Mileage: 12613,  Transmission_Type: 'Manual', Title_State:'Clear'},
        {VIN: 'JTEBU5JR8E5156431', Make: 'Chrysler', Model: 'Crossfire', Mileage: 100103,  Transmission_Type: 'Automatic', Title_State:'Salvage'},
        {VIN: '3FAFP07126R108557', Make: 'Toyota', Model: 'Yaris', Mileage: 206013,  Transmission_Type: 'Automatic', Title_State:'Reconstructed'},
        {VIN: '19XFB2F53EE058119', Make: 'Mazda', Model: 'MX-5', Mileage: 56130,  Transmission_Type: 'Automatic', Title_State:'Clear'},
      ]);
    });
};
