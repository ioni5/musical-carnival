const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("/test", (req, res) => {
    res.status(200).send("This is a message");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port:${port}`);
})