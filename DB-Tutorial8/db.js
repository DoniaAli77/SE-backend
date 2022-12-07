const config = {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 3000,
      user : 'postgres',
      password : '1234',
      database : 'postgres'
    }
  };
module.exports = require('knex')(config);