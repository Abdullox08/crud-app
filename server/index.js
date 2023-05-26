const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_app",
});
const PORT = process.env.PORT;
app.get("/api/user/", (req, res) => {
  const getSql = "SELECT * FROM user_table";
  db.query(getSql, (err, results) => {
    res.send(results);
  });
});
app.get("/api/user/:id", (req, res) => {
  const {id} = req.params
  const getSql = "SELECT * FROM user_table WHERE id=?";
  db.query(getSql, id, (err, results) => {
    res.send(results);
  });
});
app.post("/api/user/add", (req, res) => {
    const {name,email,contact} = req.body
  const sqlInsert =
    "INSERT INTO user_table (name, email, contact) VALUES (?,?,?)";
    db.query(sqlInsert,[name,email,contact],(err,resulst)=>{
        try {
            console.log(resulst? 'ok successfuly' : '');    
        } catch (error) {
            console.log(err);
        }
    })
});
app.put('/api/user/:id',(req,res)=>{
    const {id} = req.params
    const intId = parseInt(id)
    const {name,email,contact} = req.body
    const sqlPutUpdate = "UPDATE user_table SET name =?, email=?, contact=? WHERE id =?"
    db.query(sqlPutUpdate,[name,email,contact,intId], (err, results) => {
        if (err) {
          console.log(err);  
        }
        res.send(results);
      });
})  
app.delete('/api/user/:id',(req,res)=>{
    const {id} = req.params
    const sqlRemove = "DELETE FROM user_table WHERE id=?"
    db.query(sqlRemove, id, (err, results) => {
        if (err) {
          console.log(err);  
        }
        res.send(results);
      });
})
app.get("/", (req, res) => {
  res.send("hello CRUD APP ");
});
app.listen(PORT, (req, res) => {
  console.log("server is running on " + PORT);
});
