import mysql from "mysql";
import pwd from "./pwd/index.js";

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: pwd,
  database: "Test",
});

export default db;
