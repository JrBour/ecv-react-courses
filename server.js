/* eslint-disable */

const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const serverPort = process.env.PORT || 3000;
const courses = require("./courses");

if (process.env.NODE_ENV === 'development') {
  const webpack = require("webpack");
  const config = require("./webpack.config");
  const compiler = webpack(config);

  app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: '/dist'
  }));

  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use('/dist', express.static('dist'));
}

app.use(express.static('assets'));
app.set('view engine', 'pug');

app.get("/", function (req, res) {
  res.render('index', { courses: courses });
});

app.get("/courses/:courseCode", function (req, res) {
  const course = courses.find(c => c.code === req.params.courseCode);
  const file = path.join(__dirname, `courses/${req.params.courseCode}`);
  if (course &&  fs.existsSync(file)) {
    res.render('course', { course: course });
  } else {
    res.send(404);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.listen(serverPort, "localhost", function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Listening on localhost:" + serverPort);
  });
} else {
  app.listen(serverPort);
  console.log("Listening on port " + serverPort);
}

