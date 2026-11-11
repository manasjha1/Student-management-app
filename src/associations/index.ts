import Teacher from "../models/Teacher";
import User from "../models/User";

User.hasOne(Teacher, {
  foreignKey: "userId",
});

Teacher.belongsTo(User, {
  foreignKey: "userId",
});
