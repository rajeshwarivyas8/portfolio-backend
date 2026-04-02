// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// Chatbot route
app.post("/chat", (req, res) => {
  const question = req.body.message.toLowerCase();
  let reply = "";

  if (question.includes("skill")) {
    reply = "Rajeshwari knows React, Python, SQL, Power BI, AI, and IoT.";
  } else if (question.includes("project")) {
    reply =
      "Projects include AI Resume Builder, Portfolio Website, Book Inventory System, and Data Analysis dashboards.";
  } else if (question.includes("resume")) {
    reply = "You can download the resume from the portfolio resume section.";
  } else if (question.includes("contact")) {
    reply = "Email: rajeshwari@example.com";
  } else {
    reply = "Please ask about skills, projects, resume, or contact info.";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});