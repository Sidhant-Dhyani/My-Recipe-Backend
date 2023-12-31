const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get("/", (req, res) => {
    app.get("/", (req, res) => {
        res.send("Sidhant's Kitchen Backend is Live!!");
    });
});