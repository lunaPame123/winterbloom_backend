import { Router } from "express";
import { RolController } from "../roles/controllers/rol.controller";

const router = Router();
const rolCtrl = new RolController();

router.get("/roles", (req, res) => rolCtrl.getRoles(req, res));
router.post("/roles", (req, res) => rolCtrl.createRol(req, res));

router.get("/", (req, res) => res.json({ message: "API WinterBloom activa" }));

export default router;
