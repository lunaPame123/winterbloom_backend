import { Router } from "express";
import personaRoutes from "../personas/routes/persona.routes";
import usuarioRoutes from "../usuarios/routes/usuario.routes";
import rolRoutes from "../roles/routes/rol.routes";
import rolUsuarioRoutes from "../roles/routes/rolusuario.routes";
import arregloRoutes from "../arreglos/routes/arreglo.routes";
import florRoutes from "../flores/routes/flor.routes";

const router = Router();

router.use("/personas", personaRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/roles", rolRoutes);
router.use("/roles-usuario", rolUsuarioRoutes);
router.use("/arreglos", arregloRoutes);
router.use("/flores", florRoutes);

export default router;
