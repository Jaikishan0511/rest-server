const router = require("express").Router();
let postdata = [
  { id: 0, title: "post0", description: "description0" },
  { id: 1, title: "post1", description: "description1" },
  { id: 2, title: "post2", description: "description2" },
  { id: 3, title: "post3", description: "description3" },
  { id: 4, title: "post4", description: "description4" },
  { id: 5, title: "post5", description: "description5" },
  { id: 6, title: "post6", description: "description6" }
];

router.get("/", (req, res) => {
  res.json({
    data: postdata
  });
});

router.get("/:id", function(req, res) {
  const { id } = req.params;
  const index = postdata.findIndex(post => post.id === Number(id));
  console.log(req.params);
  if (index > -1) {
    return res.send({
      result: postdata[index]
    });
  }

  res.json({
    result: {}
  });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, description } = req.body;
  index = postdata.findIndex(x => x.id === id);
  const newData = Object.assign(postdata[index], { title, description }, {});
  postdata.splice(index, 1, newData);
  return res.json({
    data: postdata
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  index = postdata.findIndex(x => x.id === id);
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

module.exports = router;
