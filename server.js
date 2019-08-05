const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 3000;
let postdata = [
  { id: 0, title: "post0", description: "description0" },
  { id: 1, title: "post0", description: "description0" }
];
let comments = [
  { postid: 1, commentid: 0, commentdata: "this is comment for post1" },
  { postid: 2, commentid: 1, commentdata: "this is comment for post2" }
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

app.get("/comment", (req, res) => {
  const { postid } = req.query;
  const co = comments.filter(comment => {
    return comment.postid === Number(postid);
  });
  if (co.length) {
    return res.json({
      data: co
    });
  }
  return res.status(500).send({
    message: "invalid data"
  });
});
app.post("/comment", (req, res) => {
  if (req.body.postid) {
    const newElement = {
      postid: comments.length,
      commentdata: req.body.commentdata
    };
    comments.push(newElement);
    return res.json({
      data: comments
    });
  }
  res.status(500).send({
    message: "invalid data"
  });
});
app.put("/comment", (req, res) => {
  index = comments.findIndex(x => x.postid === 2);
  comments.splice(index, 1, {
    commentid: comments.length,
    commentdata: "new desc"
  });
  return res.json({
    data: comments
  });
});
app.delete("/comment/:commentid", (req, res) => {
  const { commentid } = req.params;
  console.log(typeof commentid);
  index = comments.findIndex(x => x.commentid === Number(commentid));
  if (index > -1) {
    comments.splice(index, 1);
    return res.json({
      success: "true"
    });
  }
  res.status(500).send({
    message: "invalid data"
  });
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
