import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

app.use("/api/auth", authRoutes);

export default app;
