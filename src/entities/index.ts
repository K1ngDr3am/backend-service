import express, { Application } from "express";
import cors from "cors";
import { DataSource } from "typeorm";
import swaggerUI from "swagger-ui-express"

const app: Application = express();
const PORT = process.env.PORT ?? 3000

// Middleware (Protectores de conexiones)
app.use(cors());
app.use(express.json());

// Rutas