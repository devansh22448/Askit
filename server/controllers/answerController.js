const Answer = require("../models/answer");

exports.createAnswer = async (req, res) => {
  try {
    const { content } = req.body;
    const { questionId } = req.params;
    const userId = req.user;

    const answer = await Answer.create({
      content,
      question: questionId,
      user: userId,
    });

    res.status(201).json({ msg: "Answer posted", answer });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.getAnswersByQuestion = async (req, res) => {
  try {
    const answers = await Answer.find({
      question: req.params.questionId,
    }).populate("user", "username");
    res.json(answers);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
