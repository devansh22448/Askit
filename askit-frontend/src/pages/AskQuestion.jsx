import { useState } from "react";
import axios from "../api";

export default function AskQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    await axios.post("/questions", { title, body });
    alert("Question posted!");
  };

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Post Question
      </button>
    </div>
  );
}
