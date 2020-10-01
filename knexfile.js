const { database, dbName, dbUser  } = require('./config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: dbName,
      user: dbUser
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: database,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
