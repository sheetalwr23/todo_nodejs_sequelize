const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Sequelize_db = require("./util/index");
const todo_work = require("./models/index");
const sequelize = require("sequelize");
const router = require("./routes/index");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.get("/todo", async (req, res) => {
  try {
    const data = await todo_work.findAll();
    res.status(200).json({ allproduct: data });
  } catch (err) {
    console.log("something went wrong", err);
  }
});

todo_work.sync().then((result) => {
  console.log(result);
  app.listen(3001);
});
