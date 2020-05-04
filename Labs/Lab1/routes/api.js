const express = require("express");
const router = express.Router();
const data = require("../data");
const taskData = data.tasks;

// // Shows a list of tasks.
// router.get("/tasks", async (req, res) => {
//   try {
//     const post = await postData.getPostById(req.params.id);
//     res.json(post);
//   } catch (e) {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const taskList = await taskData.getAllTasks();
    res.json(taskList);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;
