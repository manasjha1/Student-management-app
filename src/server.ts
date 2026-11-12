import dotenv from "dotenv";
import app from "./app";
import sequelize from "./config/database";
import Associations from "./associations";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    Associations();
    await sequelize.authenticate();
    await sequelize.sync();

    console.log("MySQL Synced successfully!");

    console.log("MySQL connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to database:", error);
    process.exit(1);
  }
};

startServer();
