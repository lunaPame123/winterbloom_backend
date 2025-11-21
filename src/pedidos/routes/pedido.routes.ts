import { Router } from "express";
import { PedidoController } from "../controllers/pedido.controller";

const router = Router();
const pedidoController = new PedidoController();

router.post("/", (req, res) => pedidoController.crearPedido(req, res));
router.get("/", (req, res) => pedidoController.obtenerTodos(req, res));
router.get("/:id", (req, res) => pedidoController.obtenerPorId(req, res));
router.delete("/:id", (req, res) => pedidoController.eliminar(req, res));

export default router;
