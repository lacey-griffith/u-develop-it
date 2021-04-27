const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
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



db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});
//default response for requests not found must be last get route! 
app.use((req,res) => {
    res.status(404).end();
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})