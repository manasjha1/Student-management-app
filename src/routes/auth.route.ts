import { Router } from "express";
import { registerAdmin } from "../controller/auth.controller";

export const router = Router();

router.post("/register", (req, res, next) => {
  void registerAdmin({ req, res }, next).catch(next);
});

export default router;
