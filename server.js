"use strict"
const app = require("express")()
const https = require("https")
const fs = require("fs");
const morgan = require("morgan");

app.use(morgan("dev"))
app.use("/api/v1", require("./src/routes/user.routes"));
app.use("/api/v1", require("./src/routes/order.routes"));

app.get("/api/v1/health", (req, res) => {
    res.send("OK");
});

app.all("/{*any}", (req, res) => {
    res.status(404).send("Not Found");
});
  
https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, app).listen(8000, () =>{
    console.log("Https Server is running in port")
})
