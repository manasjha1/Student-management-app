import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Subject = sequelize.define(
  "Subject",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: "Subject",
    tableName: "subjects",
    timestamps: true,
  },
);

export default Subject;
