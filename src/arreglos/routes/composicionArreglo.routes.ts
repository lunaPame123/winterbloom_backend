import { Router } from "express";
import { ComposicionArregloController } from "../controllers/composicionArreglo.controller";

const router = Router();
const controller = new ComposicionArregloController();

router.get("/", controller.obtenerTodos.bind(controller));
router.get("/:id", controller.obtenerPorId.bind(controller));
router.get("/arreglo/:idArreglo", controller.obtenerPorArreglo.bind(controller));
router.get("/flor/:idFlor", controller.obtenerPorFlor.bind(controller));

router.post("/", controller.crear.bind(controller));
router.put("/:id", controller.actualizar.bind(controller));
router.delete("/:id", controller.eliminar.bind(controller));

export default router;