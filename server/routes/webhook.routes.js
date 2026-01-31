const express = require("express");
const router = express.Router();
const { orderCreated } = require("../controllers/webhook.controller");

router.post("/order-created", orderCreated);

module.exports = router;
