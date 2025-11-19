import { Router } from "express";
import personaRoutes from "../personas/routes/persona.routes";
import usuarioRoutes from "../usuarios/routes/usuario.routes";

const router = Router();

router.use("/personas", personaRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;
