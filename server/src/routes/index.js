const express = require("express");
const router = express.Router();

// Admin Routes
const adminAuthRoutes = require("./admin/adminAuth.routes");

// admin routes 
router.use("/admin/auth", adminAuthRoutes);


module.exports = router;
