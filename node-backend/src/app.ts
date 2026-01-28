import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://college-project-fzm4.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔥 Explicit preflight support
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

app.use("/api/auth", authRoutes);

export default app;
