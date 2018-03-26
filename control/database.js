/* Postgres*/
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'exemplonode',
  password: '123',
  port: 5432,
})

module.exports = pool;
/*Fim postgres*/

/*var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'guess'
});

module.exports = pool;*/