const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { jwtSecret, jwtExpire, jwtRefreshExpire, jwtRefreshSecret } = require("../../config/jwt.config");
const { Admin } = require("../../models");

// Generate Token
const generateToken = (admin) => {
    return jwt.sign(
        { id: admin.id, username: admin.username },
        jwtSecret,
        { expiresIn: jwtExpire }
    );
};

const generateRefreshToken = (admin) => {
    return jwt.sign(
        { id: admin.id, username: admin.username },
        jwtRefreshSecret,
        { expiresIn: jwtRefreshExpire }
    );
};


// LOGIN ADMIN
exports.adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const admin = await Admin.findOne({ where: { username } });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(admin);
        const refreshToken = generateRefreshToken(admin);

        return res.json({
            message: "Login successful",
            token,
            refreshToken,
            admin: {
                id: admin.id,
                username: admin.username,
                email: admin.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// GET LOGGED-IN ADMIN PROFILE
exports.getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.admin.id);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        return res.json({
            id: admin.id,
            username: admin.username,
            email: admin.email,
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};


// CREATE NEW ADMIN
exports.createAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("req", req.body)
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingAdmin = await Admin.findOne({ where: { username } });
        if (existingAdmin) {
            return res.status(400).json({ message: "Username already exists" });
        }


        const newAdmin = await Admin.create({
            username,
            email,
            password,
        });

        return res.status(201).json({
            message: "Admin created successfully",
            admin: {
                id: newAdmin.id,
                username: newAdmin.username,
                email: newAdmin.email,
            },
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken)
        return res.status(401).json({ message: "Refresh token required" });

    jwt.verify(refreshToken, jwtRefreshSecret, (err, admin) => {
        if (err) return res.status(403).json({ message: "Invalid refresh token" });

        const newAccessToken = jwt.sign(
            { id: admin.id, username: admin.username },
            jwtSecret,
            { expiresIn: jwtExpire }
        );

        return res.json({ token: newAccessToken });
    });
}
