"use strict"

const router = require('express').Router()

router.get('/users', (req, res) => {
    res.json({
      message: "User route",
    });
}); 

module.exports = router;