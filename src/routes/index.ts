import { Router } from "express";

// Importar rutas
import arregloRoutes from "../arreglos/routes/arreglo.routes";
import florRoutes from "../flores/routes/flor.routes";
import pedidoRoutes from "../pedidos/routes/pedido.routes";
import personaRoutes from "../personas/routes/persona.routes";
import rolRoutes from "../roles/routes/rol.routes";
import usuarioRoutes from "../usuarios/routes/usuario.routes";

const router = Router();

// Rutas principales
router.use("/arreglos", arregloRoutes);
router.use("/flores", florRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/personas", personaRoutes);
router.use("/roles", rolRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;
