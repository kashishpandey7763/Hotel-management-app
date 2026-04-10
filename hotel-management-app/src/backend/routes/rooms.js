const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, room_name: "Deluxe Room", price: 2000 },
    { id: 2, room_name: "Luxury Room", price: 4000 }
  ]);
});

module.exports = router;