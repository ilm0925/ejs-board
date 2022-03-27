import express from "express";
import db from "./DB/index.js";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve() + "/views");

app.use(express.static(path.resolve() + "/public"));
app.use(express.urlencoded({ extended: false }));

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
app.get("/edit/:id", (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  res.render("Edit", { ID });
});

app.delete("/delete", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const query = "delete from Topics where id = ?";
  db.query(query, id, (err, reslut) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        answer: true,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
