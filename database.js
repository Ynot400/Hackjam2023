const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ducktapeman3!"
  });
  
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    db.query('CREATE DATABASE testdb', (err, result) => {
        if (err) throw err;
        console.log('Database Created');
    });
  });