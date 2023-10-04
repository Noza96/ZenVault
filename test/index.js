const express = require("express");
const app = express();

app.get("/test", async (req, res) => {
    res.json({test: "1"})
});

app.post("/post", express.json(), async (req, res) => {
    console.log("REQ_BODY", req.body);

    return res.json({1:1})
})


app.listen(3000, () => console.log("Server is running on port 3000"))