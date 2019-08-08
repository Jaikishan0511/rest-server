const router = require("express").Router();
const path = require("path");
const viewPath = "../../views";

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/index.html`));
});

router.get("/post-info/:id", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/postInfo.html`));
});
router.get("/create-post", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/insertpost.html`));
});
router.get("/update-post/:id", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/updatepost.html`));
});
module.exports = router;
