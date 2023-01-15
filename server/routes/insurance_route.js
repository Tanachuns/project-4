const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.insurance.getAllInsurance);
router.get("/:id", ctrl.insurance.getOneInsurance);
router.post("/", ctrl.insurance.crateInsurance);
router.post("/:id/update", ctrl.insurance.updateInsurance);
router.post("/:id/delete", ctrl.insurance.deleteInsurance);

module.exports = router;
