const router = require("express").Router();
const path = require("path");
const viewPath = "../../views";

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/index.html`));
});

router.get("/post-info/:id", function(req, res) {
  res.sendFile(path.join(__dirname + `${viewPath}/postInfo.html`));
});

module.exports = router;
