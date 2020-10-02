const { database, dbName, dbUser  } = require('./config');

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: './data/stock_db.db3',
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
