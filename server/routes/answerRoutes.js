const express = require("express");
const router = express.Router();
const {
  createAnswer,
  getAnswersByQuestion,
} = require("../controllers/answerController");
const auth = require("../middleware/authMiddleware");

router.post("/:questionId", auth, createAnswer); // Protected
router.get("/:questionId", getAnswersByQuestion); // Public

module.exports = router;
