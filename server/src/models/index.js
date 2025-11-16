const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/database.config");

const db = {};

function loadModels(dir) {
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            // If folder → load models inside that folder
            loadModels(fullPath);
            return;
        }

        // Load only .js files except index.js
        if (file !== "index.js" && file.endsWith(".js")) {
            const model = require(fullPath)(sequelize, Sequelize.DataTypes);
            db[model.name] = model;
        }
    });
}

// Load models from main models folder
loadModels(__dirname);

// Run associations
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
