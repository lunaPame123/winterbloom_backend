import { Router } from "express";
import { FlorController } from "../controllers/flor.controller";

const router = Router();

router.get("/", FlorController.obtenerTodas);
router.get("/activas", FlorController.obtenerActivas);
router.get("/color/:color", FlorController.buscarPorColor);
router.get("/buscar", FlorController.buscarPorNombre);
router.get("/:id", FlorController.obtenerPorId);

router.post("/", FlorController.crearFlor);
router.put("/:id", FlorController.actualizarFlor);
router.delete("/:id", FlorController.eliminar);


export default router;