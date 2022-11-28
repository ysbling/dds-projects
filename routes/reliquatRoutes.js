const express = require("express");
const reliquatControllers = require('../controllers/reliquatControllers');
const router = express.Router();

router
.route("/")
.get(reliquatControllers.getAllReliquats)
.post(reliquatControllers.createNewReliquat);

router
.route("/:id")
.get(reliquatControllers.getReliquatById)
.put(reliquatControllers.updateReliquat)
.delete(reliquatControllers.deleteReliquat);



module.exports = router;