import { Router } from "express";
import { FlorController } from "../controllers/flor.controller";

const router = Router();
const controller = new FlorController();

router.get("/", controller.obtenerTodos.bind(controller));
router.get("/activos", controller.obtenerActivos.bind(controller));
router.get("/color/:color", controller.buscarPorColor.bind(controller));
router.get("/buscar", controller.buscarPorNombre.bind(controller));
router.get("/:id", controller.obtenerPorId.bind(controller));

router.post("/", controller.crear.bind(controller));
router.put("/:id", controller.actualizar.bind(controller));
router.delete("/:id", controller.eliminar.bind(controller));

export default router;