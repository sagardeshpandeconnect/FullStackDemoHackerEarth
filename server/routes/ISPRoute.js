const express = require("express");

const {getISPData} = require("../controllers/ISPDataController")

const router = express.Router();

router.get("/", getISPData);

module.exports = router;

