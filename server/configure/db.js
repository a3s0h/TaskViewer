const pgp = require('pg-promise')();
const dotenv = require("dotenv");

dotenv.config();

const password = process.env.PASSWORD_ELEPHANT;

const dbConfig = {
  host: 'rain.db.elephantsql.com',
  port: 5432, // Default PostgreSQL port
  database: 'kxclbhbn', // Your default database
  user: 'kxclbhbn',
  password: password, // Use the actual password provided
};

const db = pgp(dbConfig);

module.exports = db;
