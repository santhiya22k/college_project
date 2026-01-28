import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// ✅ Use single DATABASE_URL
export const db = mysql.createPool(process.env.DATABASE_URL!);
