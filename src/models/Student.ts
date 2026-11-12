import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    guardianName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    admissionNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    modelName: "Student",
    tableName: "students",
    timestamps: true,
  },
);

export default Student;
