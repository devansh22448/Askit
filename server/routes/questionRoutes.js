const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
} = require("../controllers/questionController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createQuestion); // Protected
router.get("/", getAllQuestions); // Public
router.get("/:id", getQuestionById); // Public

module.exports = router;
