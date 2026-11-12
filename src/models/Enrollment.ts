import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "students",
        key: "id",
      },
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "classes",
        key: "id",
      },
    },

    enrollmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("active", "completed", "transferred"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    modelName: "Enrollment",
    tableName: "enrollments",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["studentId", "classId"],
      },
    ],
  },
);

export default Enrollment;
