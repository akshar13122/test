const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "practice_db",     // database name
  "root",            // username
  "akshar2409",      // password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,   // disable SQL logs
  }
);

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL Database (Sequelize)");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

module.exports = sequelize;
