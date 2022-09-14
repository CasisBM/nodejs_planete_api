var express = require('express');
var app = express();
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./univers.db');
const port = 7500 

app.get('/', function(req, res) {
  res.send("Bienvenue dans l'api rest des planetes");
});

app.get('/planetes',function (req, res) {
    //res.header("Content-type", "application/json")
    db.all("Select * From PLANETES", (err, data) => {
      if (err) throw err
      res.send(JSON.stringify(data))
    })
  })

  app.listen(port, () => {
    console.log(`Serveur listening on http://localhost:${port}`)
  })