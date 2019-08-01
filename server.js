const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let postdata = [
  { id: 0, title: "post0", description: "description0" },
  { id: 1, title: "post0", description: "description0" }
];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/post", (req, res) => {
  res.json({
    data: postdata
  });
});
app.get("/post/:id", function(req, res) {
  console.log(req.params);
  res.send("");
});
app.post("/post", (req, res) => {
  if (req.body.title && req.body.description) {
    const newElement = {
      id: postdata.length,
      title: req.body.title,
      description: req.body.description
    };
    postdata.push(newElement);
    return res.json({
      data: postdata
    });
  }
  res.status(500).send({
    message: "invalid data"
  });
});
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
