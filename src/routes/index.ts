import { Router } from "express";
import { RolController } from "../roles/controllers/rol.controller";
import { PersonaController } from "../personas/controllers/persona.controller";

const router = Router();
const rolCtrl = new RolController();
const personaCtrl = new PersonaController();

// Rutas ROL
router.get("/roles", (req, res) => rolCtrl.getRoles(req, res));
router.post("/roles", (req, res) => rolCtrl.createRol(req, res));

// Rutas PERSONA
router.get("/personas", (req, res) => personaCtrl.getPersonas(req, res));
router.post("/personas", (req, res) => personaCtrl.createPersona(req, res));

router.get("/", (req, res) => res.json({ message: "API WinterBloom activa" }));

export default router;
