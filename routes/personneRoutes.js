const express = require("express");
const personneControllers = require('../controllers/personneControllers');
const router = express.Router();

router
.route("/")
.get(personneControllers.getAllPersonnes)
.post(personneControllers.createNewPersonne);

router
.route("/:id")
.get(personneControllers.getPersonneById)
.put(personneControllers.updatePersonne)
.delete(personneControllers.deletePersonne);



module.exports = router;