import Class from "../models/Class";
import Enrollment from "../models/Enrollment";
import Student from "../models/Student";
import Subject from "../models/Subject";
import Teacher from "../models/Teacher";
import TeachingAssignment from "../models/TeachingAssignment";
import User from "../models/User";

const Associations = () => {
  // User Teacher
  User.hasOne(Teacher, {
    foreignKey: "userId",
    as: "teacherProfile",
  });

  Teacher.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  // User Student
  User.hasOne(Student, {
    foreignKey: "userId",
    as: "studentProfile",
  });

  Student.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  // Teacher Assignment
  Teacher.hasMany(TeachingAssignment, {
    foreignKey: "teacherId",
    as: "teachingAssignments",
  });

  TeachingAssignment.belongsTo(Teacher, {
    foreignKey: "teacherId",
    as: "teacher",
  });

  // Class Assignment
  Class.hasMany(TeachingAssignment, {
    foreignKey: "classId",
    as: "teachingAssignments",
  });

  TeachingAssignment.belongsTo(Class, {
    foreignKey: "classId",
    as: "class",
  });

  // Subject Assignment
  Subject.hasMany(TeachingAssignment, {
    foreignKey: "subjectId",
    as: "teachingAssignments",
  });

  TeachingAssignment.belongsTo(Subject, {
    foreignKey: "subjectId",
    as: "subject",
  });

  // Student Enrollment
  Student.hasMany(Enrollment, {
    foreignKey: "studentId",
    as: "enrollments",
  });

  Enrollment.belongsTo(Student, {
    foreignKey: "studentId",
    as: "student",
  });

  // Class enrollment
  Class.hasMany(Enrollment, {
    foreignKey: "classId",
    as: "enrollments",
  });

  Enrollment.belongsTo(Class, {
    foreignKey: "classId",
    as: "class",
  });
};

export default Associations;
