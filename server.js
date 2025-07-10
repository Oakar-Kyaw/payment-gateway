const app = require("express")()
const https = require("https")
const fs = require("fs");
const morgan = require("morgan");

app.use(morgan("dev"))
app.use("/api/v1", require("./src/routes/user.routes"));
app.use("/api/v1", require("./src/routes/order.routes"));
app.get("/", (req, res) => {
    res.send("WELCOME TO THE BASIC EXPRESS APP WITH AN HTTPS SERVER");
});

app.get("/api/v1/health", (req, res) => {
    res.send("OK");
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
      status: 'healthy', 
      timestamp: new Date(),
      version: process.env.VERSION || '1.0.0'
    });
  });


https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, app).listen(8000, () =>{
    console.log("Https Server is running in port")
})
