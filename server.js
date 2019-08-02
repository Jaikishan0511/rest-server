const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var postdata = [
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
app.put("/post", (req, res) => {
  index = postdata.findIndex(x => x.id === 2);
  postdata.splice(index, 1, {
    id: 2,
    title: "new title",
    description: "new desc"
  });
  return res.json({
    data: postdata
  });
});
app.delete("/post/:id", (req, res) => {
  req.params.id = Number(req.params.id);
  console.log(typeof req.params.id);
  index = postdata.findIndex(x => x.id === req.params.id);
  if (index > -1) {
    postdata.splice(index, 1);
    return res.json({
      success: "true"
    });
  }
  res.status(500).send({
    message: "invalid data"
  });
});
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
