import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://naturalfr.netlify.app/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", employeesRoutes);
app.use("/api", indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;