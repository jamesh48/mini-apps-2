require('dotenv').config(require('path').resolve('.env'))
module.exports =
{
  "development": {
    "username": process.env.PGUSER,
    "password": null,
    "database": process.env.PGDATABASE,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.PGUSER,
    "password": null,
    "database": process.env.PGDATABASE,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PGUSER,
    "password": null,
    "database": process.env.PGDATABASE,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  }
}

