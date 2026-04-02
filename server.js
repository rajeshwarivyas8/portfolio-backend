// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

app.post("/chat", (req, res) => {

  if(!req.body.message){
    return res.json({reply:"Please ask about skills, projects, experience, achievements, or contact info."});
  }

  const msg = req.body.message.toLowerCase().trim();

  let reply="Please ask about skills, projects, experience, achievements, or contact info.";

  // ABOUT
  if(msg.includes("about")){
    reply=`Software Development Engineer Intern aspirant with hands-on experience in full-stack web development and applied AI.

Skilled in React, Node.js, REST APIs and AI integrations.

Final year BTech CSE-IoT student passionate about building scalable applications and AI driven solutions.`;
  }

  // SKILLS
  else if(msg.includes("skill")){
    reply=`Technical Skills:

Languages:
Java, C++, Python, SQL, JavaScript, HTML, CSS

Web Development:
React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS

AI & Tools:
OpenAI API, ChatGPT Integration, Gemini AI

Developer Tools:
Git, GitHub, VS Code, Firebase, Linux

Core CS:
Data Structures & Algorithms
OOPS
DBMS
Operating Systems
Computer Networks

Other:
Power BI
IoT Development
Problem Solving
Team Collaboration`;
  }

  // EXPERIENCE
  else if(msg.includes("experience") || msg.includes("internship") || msg.includes("work")){
    reply=`Experience:

IBM SkillsBuild AI Internship

Built AI based solutions and learned practical AI workflows.

Developed Full Stack Projects:
AI Resume Builder
AI Portfolio Assistant
Book Inventory System

Also worked on IoT automation systems and data analytics dashboards.`;
  }

  // PROJECTS
  else if(msg.includes("project")){
    reply=`Projects:

AI Resume Builder (MERN Stack)

AI Integrated Portfolio Website

Book Inventory Management System (React + Firebase)

IoT Home Automation Projects

Power BI Data Analytics Dashboards`;
  }

  // ACHIEVEMENTS
  else if(msg.includes("achievement") || msg.includes("hackathon") || msg.includes("award")){
    reply=`Achievements:

McKinsey Forward Learning Trainee (2025)

Juspay Hiring Challenge 2025 – Top 5%

Flipkart GRID 7.0 – Top 5%

Meesho Scripted by Her Hackathon

Bhartiya Antariksh Hackathon Participant

Adobe Hackathon Participant

Smart India Hackathon Semi Finalist

IIT Indore E-CELL BoardRoom Shortlisted`;
  }

  // CONTACT
  else if(
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("phone") ||
    msg.includes("whatsapp")
  ){
    reply=`Contact Details:

Email:
rajeshwarivyas317@gmail.com

Phone / WhatsApp:
+91 7770975743`;
  }

  res.json({reply});

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("✅ Server running on port",PORT);
});