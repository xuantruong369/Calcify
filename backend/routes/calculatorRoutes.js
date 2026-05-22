const express = require("express");
const router = express.Router();

const {
  calculate,
  getHistories,
} = require("../controllers/calculatorController");

router.post("/calculate", calculate);
router.get("/histories", getHistories);

module.exports = router;
