const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hackJam2023",
    database: 'test'
  });

function update () {
        let str = '';
        db.query("SELECT * FROM people ORDER BY name;", (err, result) => {
            for (i of result) {  
                str += `${i.name} `;
            }
        });
        return str;
}

db.end();

module.exports.update = update;