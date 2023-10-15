const express = require("express");
const Todo = require("./todo");

const router = express.Router();

// Create a new todo
router.post("/todo", async (req, res) => {
  const { name, status } = req.body;

  try {
    if (!req.body.name) {
      res.status(400).json({ status: "error", message: "Name is required" });
      return;
    }

    if (!req.body.status) {
      res.status(400).json({ status: "error", message: "Status is required" });
      return;
    }

    const todo = new Todo({ name, status });
    await todo.save();
    res
      .status(201)
      .send({ status: "success", message: "Todo created successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(req.query);
    res.status(200).send({
      status: "success",
      message: "Todo retrieved successfully",
      data: todos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Get todo by id
router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ status: "error", message: "Todo not found" });
      return;
    }
    res.status(200).send({
      status: "success",
      message: "Todo retrieved successfully",
      data: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
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

    if (!todo) {
      res.status(404).json({ status: "error", message: "Todo not found" });
      return;
    }

    res.status(200).send({
      status: "success",
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Delete a todo
router.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      res.status(404).json({ status: "error", message: "Todo not found" });
      return;
    }
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

module.exports = router;
