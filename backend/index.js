const express = require("express");
const app = express();
const { db } = require("./conf");
const { backendPort } = require("./conf");


app.get("/api/user", (req, res) => {
    db.query("SELECT id, firstname, lastname, birthday, username, address FROM user", (err, results) => {
      if (err) {
        res.status(500).send("Error");
      } else {
        res.json(results);
      }
    });
  });

app.get("/api/user/:id", (req, res) => {
    db.query(
        "SELECT id_user, name, quantity FROM colddrink_order INNER JOIN colddrink ON id_colddrink=colddrink.id WHERE id_user=?",
      req.params.id,
      (err, rows) => {
        if (err) return res.status(500).send("Error: "+err);
        res.status(200).json(rows[0]);
      }
    );
  });

app.post("/api/user", (req, res) => {
    const formData = req.body;
    db.query("INSERT INTO user SET ?", formData, (err, rows) => {
      if (err) return res.status(500).send("Error");
      formData.id = rows.insertId;
      res.status(201).json(formData);
    });
  });;


app.listen(backendPort, () => {
    console.log(`API root available at: http://localhost:${backendPort}/`);
  });