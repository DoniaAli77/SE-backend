const config = {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : '123',
      database : 'postgres'
    }
  };

  module.exports = require('knex')(config);