module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING,
        role: {
            type: DataTypes.ENUM("customer", "provider", "admin"),
            defaultValue: "customer",
        }
    });

    User.associate = (models) => {
        // Example: User.hasMany(models.Service)
    };

    return User;
};
