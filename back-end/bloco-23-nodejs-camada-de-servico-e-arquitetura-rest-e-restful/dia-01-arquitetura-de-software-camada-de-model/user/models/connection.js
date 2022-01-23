    // models/connection.js

    const mysql = require('mysql2/promise');

    const connection = mysql.createPool({
        host: 'localhost',
        user: 'unamednada',
        password: '36856914',
        database: 'trybe_exercises_user'
    });

    module.exports = connection;
    