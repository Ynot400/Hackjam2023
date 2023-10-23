const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hackJam2023",
    database: 'test'
  });
  
db.connect((err) => {
  if (err) {
    console.error('Connection failed: ' + err.message);
    return;
  }
  console.log("Connected!");
  // let sql = 'CREATE TABLE people (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL UNIQUE, age INT NOT NULL);';
  // db.query(sql, (err, result) => {
  //     if (err) {
  //       console.error('Database creation failed: ' + err.message);
  //     } else {
  //       console.log('Database Created');
  //     }
  // });
});

// db.query("INSERT INTO people (name, age) VALUES ('Caden', 19), ('Logan', 19), ('Luke', 19), ('Patrick', 19);");
db.query("SELECT * FROM people ORDER BY name;", (err, result) => {
  for (i of result) {  
    console.log(i.name);
  }
});

db.end();
