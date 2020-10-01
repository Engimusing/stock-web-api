const { database, dbName, dbUser  } = require('./config');

console.log(database_url)

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
    connection: {
      database: database_url
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
