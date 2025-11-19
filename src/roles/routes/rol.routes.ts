import { Router } from "express";
import { RolController } from "../controllers/rol.controller";

const router = Router();

router.get("/", RolController.listar);
router.post("/", RolController.crear);

export default router;