module.exports = app => {
  const lotterys = require("../controllers/lottery.controller.js");

  var router = require("express").Router();

  // Create a new Lottery
  router.post("/", lotterys.create);

  // Retrieve all Lotterys
  router.get("/getAll", lotterys.findAll);

  // Retrieve all published Lotterys
  // router.get("/published", lotterys.findAllPublished);

  // // Retrieve a single Lottery with id
  // router.get("/:id", lotterys.findOne);

  // // Update a Lottery with id
  // router.put("/:id", lotterys.update);

  // // Delete a Lottery with id
  // router.delete("/:id", lotterys.delete);

  // // Create a new Lottery
  // router.delete("/", lotterys.deleteAll);

  app.use("/api/lotterys", router);
};
