const sequelize = require("sequelize");
const Sequelize_db = require("../util/index");
const todo_work = Sequelize_db.define("todo_work", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  Todo: {
    type: sequelize.STRING,
    allowNull: false,
  },
  Description: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
module.exports = todo_work;
