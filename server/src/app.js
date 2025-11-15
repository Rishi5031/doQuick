require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");

// Middlewares
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

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
