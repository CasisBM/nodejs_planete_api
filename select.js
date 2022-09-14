const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./univers.db');

db.all("SELECT * FROM planetes", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  db.close();