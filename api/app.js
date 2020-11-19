const express = require("express");
// const logger = require('morgan');
// const bodyParser = require('body-parser');

// const http = require('http');

// app.use(logger('dev'));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("welcome");
});

require("./routes")(app);
app.listen(port, function () {
  console.log("listening at http://localhost:" + port);
});
