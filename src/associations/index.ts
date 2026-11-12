import Class from "../models/Class";
import Student from "../models/Student";
import Teacher from "../models/Teacher";
import TeachingAssignment from "../models/TeachingAssignment";
import User from "../models/User";

User.hasOne(Teacher, {
  foreignKey: "userId",
});

Teacher.belongsTo(User, {
  foreignKey: "userId",
});

User.hasOne(Student, {
  foreignKey: "userId",
});

Student.belongsTo(User, {
  foreignKey: "userId",
});

Teacher.hasMany(TeachingAssignment, {
  foreignKey: "teacherId",
});

TeachingAssignment.belongsTo(Teacher, {
  foreignKey: "teacherId",
});
