import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const TeachingAssignment = sequelize.define(
  "TeachingAssignment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "teachers",
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

    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "subjects",
        key: "id",
      },
    },
  },
  {
    modelName: "TeachingAssignment",
    tableName: "teaching_assignments",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["teacherId", "classId", "subjectId"],
      },
    ],
  },
);

export default TeachingAssignment;
