const sequelize = require("sequelize");
const Sequelize_db = new sequelize("practice_todo", "root", "Sheetal@2311", {
  dialect: "mysql",
  host: "localhost",
});

Sequelize_db.authenticate()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch(() => {
    console.loog("error to connect with database");
  });
module.exports = Sequelize_db;
