
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const recipesRoute = require('./routes/recipe');
const usersRoute = require('./routes/users');

const port = 4000;
const atlas =
    "mongodb+srv://siddhantydhyani99:c7XGZ6IRCV949LWs@cluster0.7pdjkrf.mongodb.net/Recipe";

const connectToDB = async (req, res) => {
    try {
        await mongoose.connect(atlas);
        console.log("Connected to MongoDB Atlas!!");
    } catch (error) {
        console.error(error.message);
    }
}

connectToDB();

app.use("/api/auth", authRoute);
app.use('/api/recipes', recipesRoute);
app.use('/api/users', usersRoute);

app.get("/", (req, res) => {
    res.send("Sidhant's Kitchen Backend is Live!!");
});

app.listen(port, () => {
    console.log(`App running on port ${port}!!!`);
});

