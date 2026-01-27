import { db } from "../config/db";

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const [result] = await db.execute(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, password]
  );

  return result;
};

export const findUserByEmail = async (email: string) => {
  const [rows]: any = await db.execute(
    "SELECT * FROM users WHERE email=?",
    [email]
  );
  return rows[0];
};
