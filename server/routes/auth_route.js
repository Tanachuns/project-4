const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/login", ctrl.auth.login);
router.post("/register", ctrl.auth.register);

module.exports = router;
