const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password'
});

// connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

const app = express();

// create database
app.get('./createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created');
    });
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
})