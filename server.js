const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const postdata = [{ id: 0, title: "post1", description: "hello there" }];
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
//app.post('/notes', (req, res) => {
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
