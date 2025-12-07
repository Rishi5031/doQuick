module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    jwtRefreshExpire: process.env.JWT_REFRESH_EXPIRE,
};
