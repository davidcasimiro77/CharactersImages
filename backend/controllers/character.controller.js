const db = require("../models");
const Character = db.characters;
const Op = db.Sequelize.Op;

// Create and Save a new Character
exports.create = (req, res) => {
  console.log("Creating")
  // Validate request
  if (!req.body.real_name || !req.body.alias || !req.body.rol || !req.body.status || !req.body.origin) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Character
  const character = {
    real_name: req.body.real_name,
    alias: req.body.alias,
    rol: req.body.rol,
    status: req.body.status,
    origin: req.body.origin,
    filename: req.file ? req.file.filename : ""
  }

  // Save Character in the database
  Character.create(character).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the character"
    })
  });
};

// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
  Character.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Characters"
    })
  })
};

// Find a single Character with an id
exports.findOne = (req, res) => {

}

// Update a Character by the id in the request
exports.update = (req, res) => {

};

// Delete a Character with the specified id in the request
exports.delete = (req, res) => {

};