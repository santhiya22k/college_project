"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
const db_1 = require("../config/db");
const createUser = async (name, email, password) => {
    const [result] = await db_1.db.execute("INSERT INTO users (name,email,password) VALUES (?,?,?)", [name, email, password]);
    return result;
};
exports.createUser = createUser;
const findUserByEmail = async (email) => {
    const [rows] = await db_1.db.execute("SELECT * FROM users WHERE email=?", [email]);
    return rows[0];
};
exports.findUserByEmail = findUserByEmail;
