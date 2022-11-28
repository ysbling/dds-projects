const express = require("express");
const userControllers = require('../controllers/userControllers');
const router = express.Router();

router
.route("/")
.get(userControllers.getAllUsers)
.post(userControllers.createNewUser);

router
.route("/:id")
.get(userControllers.getUserById)
.put(userControllers.updateUser)
.delete(userControllers.deleteUser);



module.exports = router;