"use strict"

const router = require('express').Router()

router.get('/users', (req, res) => {
    res.json({
      success: true,
      message: "User route",
      data: [{
        name: "Oakar Kyaw",
      }]
    });
}); 

module.exports = router;