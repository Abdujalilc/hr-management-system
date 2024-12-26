const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const serverPort = process.env.PORT || 3001;

// Database setup
const db = new Database("./database.db", { verbose: console.log });

// Fetch all employees
app.get("/employees", (req, res) => {
  const employees = db.prepare("SELECT * FROM employeeSystem ORDER BY name ASC").all();
  if (employees.length === 0) {
    return res.sendStatus(404);
  }
  res.json(employees);
});

// Register a new employee
app.post("/create", (req, res) => {
  const { name, age, country, position, wage } = req.body;
  if (!name || !age || !country || !position || !wage) {
    return res.status(400).json({ error: true, message: "All fields are required." });
  }

  const existingEmployee = db.prepare("SELECT * FROM employeeSystem WHERE name = ?").get(name);
  if (existingEmployee) {
    return res.status(409).json({ error: true, message: "Employee already exists." });
  }

  const result = db.prepare("INSERT INTO employeeSystem (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)").run(name, age, country, position, wage);
  res.status(201).json({ error: false, employeeId: result.lastInsertRowid });
});

// Update employee wage
app.patch("/update", (req, res) => {
  const { id, wage } = req.body;
  if (!id || !wage) {
    return res.status(400).json({ error: true, message: "ID and wage are required." });
  }

  const result = db.prepare("UPDATE employeeSystem SET wage = ? WHERE id = ?").run(wage, id);
  if (result.changes > 0) {
    res.json({ error: false, message: "Employee updated successfully." });
  } else {
    res.status(404).json({ error: true, message: "Employee not found." });
  }
});

// Delete employee
app.delete("/employee/delete/:id", (req, res) => {
  const { id } = req.params;
  const employee = db.prepare("SELECT * FROM employeeSystem WHERE id = ?").get(id);
  if (!employee) {
    return res.status(404).json({ error: true, message: "Employee not found." });
  }

  const result = db.prepare("DELETE FROM employeeSystem WHERE id = ?").run(id);
  if (result.changes > 0) {
    res.json({ error: false, message: "Employee deleted successfully." });
  } else {
    res.status(500).json({ error: true, message: "Failed to delete employee." });
  }
});

// Start the server
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
