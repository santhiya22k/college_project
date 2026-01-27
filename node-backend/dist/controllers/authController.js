"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hash = await bcryptjs_1.default.hash(password, 10);
    await (0, user_model_1.createUser)(name, email, hash);
    res.status(201).json({
        message: "Account created successfully"
    });
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await (0, user_model_1.findUserByEmail)(email);
    if (!user)
        return res.status(401).json({ message: "User not found" });
    const valid = await bcryptjs_1.default.compare(password, user.password);
    if (!valid)
        return res.status(401).json({ message: "Wrong password" });
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({
        message: "Login success",
        token,
        user
    });
};
exports.login = login;
