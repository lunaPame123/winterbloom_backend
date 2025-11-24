import { Router } from "express";
import { FlorController } from "../controllers/flor.controller";
import { CrearFlorDto } from "../dtos/crearFlor.dto";
import { ActualizarFlorDto } from "../dtos/actualizarFlor.dto";
import { validarEntidad } from "../../middlewares/validarEntidad";

const router = Router();

router.get("/", FlorController.obtenerTodas);
router.get("/activas", FlorController.obtenerActivas);
router.get("/color/:color", FlorController.buscarPorColor);
router.get("/buscar", FlorController.buscarPorNombre);
router.get("/:id", FlorController.obtenerPorId);

router.post("/", validarEntidad(CrearFlorDto), FlorController.crearFlor);
router.put("/:id", validarEntidad(ActualizarFlorDto), FlorController.actualizarFlor);
router.delete("/:id", FlorController.eliminar);


export default router;