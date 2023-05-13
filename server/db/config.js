// D:\myGraphQLPractice\server\db\config.mjs
//import mysql from "mysql";
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123abc",
  database: "notes_hub",
});

module.exports = { db };
