import bcrypt from "bcrypt";
import User from "../models/User.js";

export const adminRegistration = async (data: any) => {
  const { name, email, password } = data;

  console.log("Admin registration started!");

  // Normalize email
  const validEmail = email.trim().toLowerCase();

  // Check existing email
  const findEmail = await User.findOne({
    where: {
      email: validEmail,
    },
  });

  if (findEmail) {
    throw new Error("Email already exists!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create Admin
  const admin = await User.create({
    name,
    email: validEmail,
    password: hashedPassword,
    role: "admin",
  });

  // Exclude password
  const { password: _, ...adminData } = admin.toJSON();

  return adminData;
};
