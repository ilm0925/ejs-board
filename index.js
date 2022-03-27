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
  const query = "select * from Topics where id = ?";
  db.query(query, ID, (err, result) => {
    if (err) {
      res.send(err);
    } else if (result == "") {
      res.send("찾으시는 페이지가 존재하지않습니다.");
    } else res.render("Edit", { id: ID, Data: result[0] });
  });
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const query = "delete from Topics where id = ?";
  db.query(query, id, (err, reslut) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`<script>location.href = "http://localhost:3000/main"</script>`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
