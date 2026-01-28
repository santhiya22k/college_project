import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    await createUser(name, email, hash);

    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user)
    return res.status(401).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid)
    return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Login success",
    token,
    user
  });
};
