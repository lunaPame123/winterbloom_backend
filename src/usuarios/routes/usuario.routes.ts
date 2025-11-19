import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const router = Router();

router.get("/", UsuarioController.listar);
router.get("/:id", UsuarioController.obtener);
router.post("/", UsuarioController.crear);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;