const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getOrders,
  getSummary
} = require("../controllers/store.controller");

router.get("/orders", auth, getOrders);
router.get("/summary", auth, getSummary);

module.exports = router;
