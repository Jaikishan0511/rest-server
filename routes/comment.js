const router = require("express").Router();
let comments = [
  { postid: 1, commentid: 0, commentdata: "this is comment for post1" },
  { postid: 2, commentid: 1, commentdata: "this is comment for post2" }
];
router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
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
router.put("/", (req, res) => {
  index = comments.findIndex(x => x.postid === 2);
  comments.splice(index, 1, {
    commentid: comments.length,
    commentdata: "new desc"
  });
  return res.json({
    data: comments
  });
});
router.delete("/:id", (req, res) => {
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
module.exports = router;
