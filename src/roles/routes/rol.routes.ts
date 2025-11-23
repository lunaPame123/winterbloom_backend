import { Router } from "express";
import { RolController } from "../controllers/rol.controller";

const router = Router();

router.get("/", RolController.listar);
router.get("/:idRol", RolController.obtener);
router.post("/", RolController.crear);
router.put("/:idRol", RolController.actualizar);
router.delete("/:idRol", RolController.eliminar);

export default router;