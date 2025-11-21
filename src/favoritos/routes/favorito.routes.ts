import { Router } from "express";
import { FavoritoController } from "../controllers/favorito.controller";

const router = Router();
const controller = new FavoritoController();

router.get("/", controller.obtenerTodos.bind(controller));
router.get("/:id", controller.obtenerPorId.bind(controller));
router.get("/usuario/:idUsuario", controller.obtenerPorUsuario.bind(controller));

router.post("/", controller.crear.bind(controller));
router.delete("/:id", controller.eliminar.bind(controller));

export default router;