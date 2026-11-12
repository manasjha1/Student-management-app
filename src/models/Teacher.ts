import { DataType, DataTypes } from "sequelize";
import sequelize from "../config/database";

const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    employeeId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    joiningDate: {
      type: DataTypes.DATE,
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
    modelName: "Teacher",
    tableName: "teachers",
    timestamps: true,
  },
);

export default Teacher;
