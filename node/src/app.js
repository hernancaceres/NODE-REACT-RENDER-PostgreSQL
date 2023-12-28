import express from "express";
import morgan from "morgan";
import cors from "cors";
import {FRONTEND_URL} from "./config.js"

const app = express();

// Import routes
import projectRoutes from "./routes/projects.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors({
    origin: "https://node-react-render-postgresql-front.onrender.com",  // Reemplaza con la URL de tu aplicación de React
    credentials: true,
}));


// Routes
app.use("/api/projects", projectRoutes);

export default app;