const express = require("express");
const produitControllers = require('../controllers/produitControllers');
const router = express.Router();

router
.route("/")
.get(produitControllers.getAllProduits)
.post(produitControllers.createNewProduit);

router
.route("/:id")
.get(produitControllers.getProduitById)
.put(produitControllers.updateProduit)
.delete(produitControllers.deleteProduit);



module.exports = router;