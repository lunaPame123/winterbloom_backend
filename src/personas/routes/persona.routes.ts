import { Router  } from "express";
import { PersonaController } from "../controllers/persona.controller";

const router = Router();

router.get("/", PersonaController.listar);
router.get("/:idPersona", PersonaController.obtener);
router.post("/", PersonaController.crear);
router.put("/:idPersona", PersonaController.actualizar);

export default router;