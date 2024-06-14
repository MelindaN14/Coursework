// handlers/studentHandler.js
module.exports.createStudent = (req, res) => {
    const { name, courseId, courseName, cohort } = req.body;
    if (name && courseId && courseName && cohort) {
      res.status(200).json({ name, courseId, courseName, cohort });
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  };
  