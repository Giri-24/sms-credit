
import express from "express";
import topupRoutes from "./routes/topup";
const app = express();
app.use(express.json());
app.use("/api", topupRoutes);
export default app;
