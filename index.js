import express from "express";
import db from "./db.js";
import ejs from "ejs";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engines", "ejs");
app.set("views", path.resolve() + "/views");

app.get("/main", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
