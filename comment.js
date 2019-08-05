const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
var comments = [
  { postid: 1, commentid: 0, commentdata: "this is comment for post1" },
  { postid: 2, commentid: 1, commentdata: "this is comment for post2" }
];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
