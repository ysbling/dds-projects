const express = require("express");
const commandeControllers = require('../controllers/commandeControllers');
const router = express.Router();

router
.route("/")
.get(commandeControllers.getAllCommandes)
.post(commandeControllers.createNewCommande);

router
.route("/:id")
.get(commandeControllers.getCommandeById)
.put(commandeControllers.updateCommande)
.delete(commandeControllers.deleteCommande);



module.exports = router;