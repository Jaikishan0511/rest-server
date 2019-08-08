const router = require("express").Router();
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const viewRoutes = require("./view");
const bodyParser = require("body-parser");

const initRoutes = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  router.use("/post", postRoutes);
  router.use("/comment", commentRoutes);
  app.use("/api", router);
  app.use(viewRoutes);
};

module.exports = initRoutes;
