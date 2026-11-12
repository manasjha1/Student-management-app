import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "unique_class_per_year",
    },

    section: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "unique_class_per_year",
    },

    academicYear: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "unique_class_per_year",
    },
  },
  {
    modelName: "Class",
    tableName: "classes",
    timestamps: true,
  },
);

export default Class;
