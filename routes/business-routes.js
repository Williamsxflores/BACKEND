const express = require("express");

const businessController = require("../controllers/business-controller");

const router = express.Router();

router.get("/", businessController.getBusiness);

router.post("/", businessController.saveBusiness);

module.exports = router;
