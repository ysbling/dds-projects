const express = require("express");
const ligne_commandeControllers = require('../controllers/lComControllers');
const router = express.Router();

router
.route("/")
.get(ligne_commandeControllers.getAllLigne_commandes)
.post(ligne_commandeControllers.createNewLigne_commande);

router
.route("/:id")
.get(ligne_commandeControllers.getLigne_commandeById)
.put(ligne_commandeControllers.updateLigne_commande)
.delete(ligne_commandeControllers.deleteLigne_commande);



module.exports = router;