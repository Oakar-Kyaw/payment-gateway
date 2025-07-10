// routes/user.routes.js
const express = require("express");
const fs = require("fs")
const router = express.Router();

// /**
// //  * @swagger
// //  * tags:
// //  *   name: Order
// //  *   description: Order management
// //  */

// /**
//  * @swagger
//  * /api/v1/orders:
//  *   get:
//  *     summary: Get all order
//  *     tags: [Order]
//  *     description: Retrieve a list of all order
//  *     responses:
//  *       200:
//  *         description: A list of order
//  */
router.get("/order", (req, res) => {
  res.json({
    message: "Get all order",
    users: [
      { id: 1, name: "Order 1" },
      { id: 2, name: "Order 2" },
    ],
  });
});

// router.get("/video", async (req,res)=>{
//   const path = "../Thrist.mp4"
// //  const stats = await fs.promises.stat(path)
//   res.writeHead(200,{
//     "Content-Type": "video/mp4",
//  //   "Content-Length": stats.size 
//   })
//   fs.createReadStream(path).pipe(res)
// })

module.exports = router;
