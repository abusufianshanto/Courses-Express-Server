const express = require('express');
const app = express();
const port = 3000;

// Sample course data
const courses = [
  { name: "InfoSys", attendance: 90, program: "EC", postalCode: "83278", city: "Traunstein" },
  { name: "Math", attendance: 45, program: "EC", postalCode: "83278", city: "Traunstein" },
  { name: "Physics", attendance: 70, program: "EC", postalCode: "83278", city: "Traunstein" }
];

// Serve static files for CSS (optional)
app.use(express.static('public'));

// Route to get all courses
app.get('/get_all_courses', (req, res) => {
  let html = '<!DOCTYPE html><html><head><title>Courses</title>';
  html += '<style> .low-attendance { color: red; } </style>'; // CSS inside HTML
  html += '</head><body><h1>All Courses</h1><ul>';

  courses.forEach(course => {
    let className = course.attendance < 50 ? 'low-attendance' : '';
    html += `<li class="${className}">${course.name} with ${course.attendance}% attendance rate (Study Program: ${course.program}) in ${course.postalCode}, ${course.city}</li>`;
  });

  html += '</ul></body></html>';
  res.send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
