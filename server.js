const app = require("express")()
const https = require("https")
const fs = require("fs");
const morgan = require("morgan");

app.use(morgan("dev"))
app.use("/api/v1", require("./src/routes/user.routes"));
app.get("/", (req, res) => {
    res.send("WELCOME TO THE BASIC EXPRESS APP WITH AN HTTPS SERVER");
});


https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, app).listen(8000, () =>{
    console.log("Https Server is running in port")
})
