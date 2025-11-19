import { Router  } from "express";
import { PersonaController } from "../controllers/persona.controller";

const router = Router();

router.get("/", PersonaController.listar);

router.get("/:id", PersonaController.obtener);

router.post("/", PersonaController.crear);

router.put("/:id", PersonaController.actualizar);

export default router;