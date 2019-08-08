const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
router(app);
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);
