import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { AppDataSource } from "./database/data-source";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = parseInt(process.env.PORT || "3000");

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Conectado a PostgreSQL");
    app.listen(PORT, () =>
      console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Error al iniciar:", err));
