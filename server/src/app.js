require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const mainRoutes = require("./routes/index");
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "http://localhost:5176",
        ],
        credentials: true,
    })
);



// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api", mainRoutes);


// Sync DB
db.sequelize
    .authenticate()
    .then(() => {
        console.log("MySQL connected successfully.");
        return db.sequelize.sync(); // use { alter: true } in development
    })
    .then(() => console.log("Models synchronized."))
    .catch((err) => console.error("DB error:", err));

module.exports = app;
