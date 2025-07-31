const Question = require("../models/question");

exports.createQuestion = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user;

    const question = await Question.create({
      title,
      description,
      user: userId,
    });

    res.status(201).json({ msg: "Question posted", question });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("user", "username");
    res.json(questions);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate(
      "user",
      "username"
    );
    if (!question) return res.status(404).json({ msg: "Question not found" });
    res.json(question);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
