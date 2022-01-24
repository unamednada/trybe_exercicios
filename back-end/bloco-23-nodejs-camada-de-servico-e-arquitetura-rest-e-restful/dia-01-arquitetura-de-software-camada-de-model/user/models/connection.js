require('dotenv').config();
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB_NAME,
} = process.env;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'unamednada',
    password: '36856914',
    database: 'trybe_exercises_user'
});

module.exports = connection;
