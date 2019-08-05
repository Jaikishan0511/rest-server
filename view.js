const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const path = require("path");
const router = express.Router();

router.get("/get", function(req, res) {
  res.sendFile(path.join(__dirname + "/get.html"));
});
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
