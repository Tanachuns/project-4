const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.cover.getAllCover);
router.get("/:id", ctrl.cover.getOneCover);
router.post("/", ctrl.cover.crateCover);
router.post("/:id/update", ctrl.cover.updateCover);
router.post("/:id/delete", ctrl.cover.deleteCover);

module.exports = router;
