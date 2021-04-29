const mysql = require('mysql2');

//secure information
require('dotenv').config();
let pw = process.env.PW;
let database = process.env.DATABASE;


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: `${pw}`,
    database: `${database}`
  },
  console.log(`Connected to the ${database} database.`)
);

module.exports = db;