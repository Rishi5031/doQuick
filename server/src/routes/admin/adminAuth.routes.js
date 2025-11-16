const express = require("express");
const router = express.Router();

const adminAuth = require("../../controllers/admin/adminAuth.controller");
const adminMiddleware = require("../../middlewares/adminAuth.middleware");
const multer = require("multer");
const upload = multer();
// LOGIN
router.post("/login", upload.none(), adminAuth.adminLogin);

// CREATE ADMIN (for initial setup, can be removed later)
router.post("/create", upload.none(), adminAuth.createAdmin);

// PROTECTED ROUTE (dashboard)
router.get("/profile", adminMiddleware, adminAuth.getAdminProfile);

router.post("/refresh-token", adminAuth.refreshToken);


module.exports = router;
