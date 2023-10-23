// const mysql = require('mysql');
// const updater = require('./updater');

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hackJam2023",
    database: 'test'
  });

// function update () {
//     let str = ``;
//     db.query("SELECT * FROM people ORDER BY name;", (err, result) => {
//         return result;
//         // for (i of result) {  
//         //     // console.log(`${i.name}<br/>`);
//         //     str += `${i.name}<br/>`;
//         // }
//         // return str;
//     });
// }

function update(name, age, callback) {
    let str = ``;
    db.query(`INSERT INTO people (name, age) VALUES ('${name}', ${age})`);
    db.query("SELECT * FROM people ORDER BY name;", (err, result) => {
        if (err) {
            // Handle the error, if any.
            callback(err, null);
        } else {
            // Process the result
            for (const i of result) {
                str += `${i.name}   ${i.age}<br/>`;
            }
            // Invoke the callback with the result
            callback(null, str);
        }
    });
}

// console.log(update());

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('A client connected.');

  // Handle messages from the client
socket.on('message', (messageJSON) => {
    const messageObj = JSON.parse(messageJSON);
    console.log(`Received ${messageObj.name}, age ${messageObj.age}`);
    // socket.send(`server received ${message}`);
    // Send a response to the client
    update(messageObj.name, messageObj.age, (err, result) => {
        if (err) {
            console.error("Error:", err);
        } else {
            socket.send(result);
        }
    });
  });

  // Handle disconnections
  socket.on('close', () => {
    console.log('A client disconnected.');
  });
});

// const pOutputElem = document.querySelector(".output");
// const reloadButtonElem = document.querySelector(".button");
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "hackJam2023",
//     database: 'test'
//   });

// const pElem = document.querySelector('.output');
// const buttonElem = document.querySelector('.button');

// buttonElem.addEventListener("click", () => {
//     str = updater.update();
// });

// app.get('/api/data', (req, res) => {
//     const data = { message: str };
//     res.json(data);
// });
  
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// pElem.innerHTML = str;