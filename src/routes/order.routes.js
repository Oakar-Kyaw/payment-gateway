// routes/user.routes.js
const express = require("express");
const fs = require("fs")
const router = express.Router();


router.get("/order", (req, res) => {
  res.json({
    message: "Get all order",
    users: [
      { id: 1, name: "Order 1" },
      { id: 2, name: "Order 2" },
    ],
  });
});


module.exports = router;
