const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.user.getAllUser);
router.get("/:id", ctrl.user.getOneUser);
router.post("/", ctrl.user.crateUser);
router.post("/:id/update", ctrl.user.updateUser);
router.post("/:id/delete", ctrl.user.deleteUser);

module.exports = router;
