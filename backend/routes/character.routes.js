module.exports = app => {
  const characters = require("../controllers/character.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Character
  // DECOMMENT:
  router.post("/", upload.single('file'), characters.create);

  // Retrieve all Characters
  router.get("/", characters.findAll);

  // Retrieve a single Character with id
  router.get("/:id", characters.findOne);

  // Update a Character with id
  router.put("/:id", characters.update);

  // Delete a Character with id
  router.delete("/:id", characters.delete);

  app.use("/api/characters", router);
}