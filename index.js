const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("/test", (req, res) => {
    res.status(200).send("This is a message");
});

app.listen(9090, () => {
    console.log("Server running on port:9090");
})