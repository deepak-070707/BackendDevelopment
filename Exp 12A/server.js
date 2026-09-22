const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// EJS configuration
app.set("view engine", "ejs");

// Sample data
let students = [
  { id: 1, name: "Rahul", course: "B.Tech CSE" },
  { id: 2, name: "Priya", course: "B.Tech CSE" },
  { id: 3, name: "Aman", course: "B.Tech CSE" }
];

// Home page - EJS templating
app.get("/", (req, res) => {
  res.render("index", {
    title: "Experiment 12A",
    students
  });
});

// URL parameter example
app.get("/student/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// REST API - GET all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// REST API - GET one student
app.get("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// REST API - POST JSON data
app.post("/api/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and course are required"
    });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// POST form data from EJS
app.post("/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).send("Name and course are required.");
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };

  students.push(newStudent);
  res.redirect("/");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
