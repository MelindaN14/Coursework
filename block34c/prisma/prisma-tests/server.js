const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const { name, courseId, courseName, cohort } = req.body;
    const student = await prisma.student.create({
      data: {
        name,
        courseId,
        courseName,
        cohort,
      },
    });
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong" });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong" });
  }
});

module.exports = app;