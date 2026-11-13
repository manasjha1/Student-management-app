import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import sequelize from "./config/database";
import Associations from "./associations";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Register model relationships
    Associations();

    // Verify database connection
    await sequelize.authenticate();
    console.log("Database connection established.");

    // Synchronize models
    await sequelize.sync();
    console.log("Database models synchronized.");

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();
