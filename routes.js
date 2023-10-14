const express = require("express");
const Todo = require("./todo");

const router = express.Router();

// Create a new todo
router.post("/todo", async (req, res) => {
  const { name, status } = req.body;

  try {
    const todo = new Todo({ name, status });
    await todo.save();
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(req.query);
    res.send({ data: todos });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get todo by id
router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todos = await Todo.findById(id);
    res.send({ data: todos });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a todo
router.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { name, status },
      { new: true }
    );
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a todo
router.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
