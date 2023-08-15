const express = require("express");
const path = require("path");
const todo_work = require("../models/index");

exports.postTodo = async (req, res) => {
  try {
    const Todo = req.body.Todo;
    const Description = req.body.Description;
    console.log(Todo, Description);
    const data = await todo_work.create({
      Todo: Todo,
      Description: Description,
    });
    console.log(data);
    res.status(200).json({ TodoList: data });
  } catch (error) {
    console.log(err);
  }
};
exports.getTodo = async (req, res) => {
  try {
    const data = await todo_work.findAll();
    res.status(200).json({ allproduct: data });
  } catch (err) {
    console.log("something went wrong", err);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const uId = req.params.id;
    if (uId === undefined) {
      console.log("id is missing");
      res.status(400).json({ error: "ID is missing" });
      return;
    }
    await todo_work.destroy({ where: { id: uId } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
