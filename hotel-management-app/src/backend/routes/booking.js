const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Booking successful");
});

module.exports = router;