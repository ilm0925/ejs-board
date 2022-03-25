import express from "express";
import db from "./DB/index.js";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve() + "/views");

app.use(express.static(path.resolve() + "/public"));

app.get("/main", (req, res) => {
  const query = "SELECT * from Topics";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.render("main", { data: result });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
