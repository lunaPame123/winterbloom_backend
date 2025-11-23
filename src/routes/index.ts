import { Router } from "express";
import personaRoutes from "../personas/routes/persona.routes";
import usuarioRoutes from "../usuarios/routes/usuario.routes";
import rolRoutes from "../roles/routes/rol.routes";
import arregloRoutes from "../arreglos/routes/arreglo.routes";
import florRoutes from "../flores/routes/flor.routes";
import pedidoRoutes from "../pedidos/routes/pedido.routes";

const router = Router();

router.use("/personas", personaRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/roles", rolRoutes);
router.use("/arreglos", arregloRoutes);
router.use("/flores", florRoutes);
router.use("/pedidos", pedidoRoutes);

export default router;
