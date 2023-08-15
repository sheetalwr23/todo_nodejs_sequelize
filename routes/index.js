const express = require("express");
const path = require("path");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.post("/todo", controller.postTodo);
router.get("/todo", controller.getTodo);
router.delete("/todo/:id", controller.deleteTodo);

module.exports = router;
