import { Router } from "express";
import { login, signup } from "../controllers/authController";

const router = Router();
router.get("/test", (req, res) => {
  res.json({ message: "Auth route working ✅" });
});
router.post("/signup", signup);
router.post("/login", login);

export default router;
