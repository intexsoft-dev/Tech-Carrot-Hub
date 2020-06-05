// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'postgres'
    },
    debug: false
  },

  test: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'postgres'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
