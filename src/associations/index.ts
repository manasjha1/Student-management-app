import Student from "../models/Student";
import Teacher from "../models/Teacher";
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
