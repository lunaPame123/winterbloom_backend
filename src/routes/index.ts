import { Router } from "express";
import personaRoutes from "../personas/routes/persona.routes";

const router = Router();

router.use("/personas", personaRoutes);

export default router;
