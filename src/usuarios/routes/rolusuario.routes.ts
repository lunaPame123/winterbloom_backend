import { Router } from "express";
import { RolUsuarioController } from "../controllers/rolusuario.controller";

const router = Router();

router.post("/", RolUsuarioController.asignar);
router.delete("/:id", RolUsuarioController.eliminar);

export default router;