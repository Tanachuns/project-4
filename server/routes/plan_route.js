const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.plan.getAllPlan);
router.get("/:id", ctrl.plan.getOnePlan);
router.post("/", ctrl.plan.cratePlan);
router.post("/:id/update", ctrl.plan.updatePlan);
router.post("/:id/delete", ctrl.plan.deletePlan);

module.exports = router;
