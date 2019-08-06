const router = require("express").Router();
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const viewRoutes = require("./view");

const initRoutes = app => {
  router.use("/post", postRoutes);
  router.use("/comment", commentRoutes);
  app.use("/api", router);
  app.use(viewRoutes);
};

module.exports = initRoutes;
