const express = require("express");
const app = express();
var cors = require('cors');
const port = 5000;


app.use(cors())

// json file import
const courses = require("./courses.json");


app.get("/", (req, res) => {
  res.send("server is ready")
});

// data api get....(all Data api)
app.get('/courses', (req, res) => {
  res.send(courses)
})

// data api get....(Single id --Data api)
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const single_course = courses.find(course => course._id === id) ||{};
  res.send(single_course)
})



// cmd
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
