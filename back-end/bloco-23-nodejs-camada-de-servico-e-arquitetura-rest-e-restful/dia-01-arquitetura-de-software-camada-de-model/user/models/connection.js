require('dotenv').config();
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB_NAME,
} = process.env;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB_NAME
});

module.exports = connection;
