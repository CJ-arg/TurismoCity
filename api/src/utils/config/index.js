require('dotenv').config();

module.exports = {
    dbUser: process.env.DB_USER || 'postgres' ,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.HOST,
    dbPassword: process.env.DB_PASSWORD,
    host: process.env.HOST,
    PORT: process.env.PORT
}