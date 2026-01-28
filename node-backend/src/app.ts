import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes";

const app = express();

// ✅ CORS – allow frontend to talk to backend
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://college-project-virid-zeta.vercel.app", // ✅ FRONTEND
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Preflight support (ONLY ONCE)
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

// ✅ Routes
app.use("/api/auth", authRoutes);

export default app;
