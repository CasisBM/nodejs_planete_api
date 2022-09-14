function create(){
    const sqlite3 = require("sqlite3").verbose();
    const dbname = "univers.db"
    
    let db = new sqlite3.Database(dbname, err => {
      if (err)
        throw err
      console.log(`Base de données initialisée dans le fichier: ${dbname}`)
    })
    
    db.run("Create table planetes (id INTEGER PRIMARY KEY AUTOINCREMENT , name varchar(25), image_url varchar(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL )")
    
    db.close();
  }

  function insert(){
    setTimeout(() => {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./univers.db');
    db.run("Insert into planetes (name, image_url) values (?, ?)", ["Venus", "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"])
    db.run("Insert into planetes (name, image_url) values (?, ?)", ["Terre", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png"])
    db.run("Insert into planetes (name, image_url) values (?, ?)", ["Mercure", "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg"])
    db.run("Insert into planetes (name, image_url) values (?, ?)", ["Mars", "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"])
    db.close();
    },2000);
}

create();
insert();