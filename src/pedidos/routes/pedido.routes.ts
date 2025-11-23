import { Router } from "express";
import { PedidoController } from "../controllers/pedido.controller";

const router = Router();

// --- PEDIDOS ---
router.post("/", PedidoController.crearPedido);
router.get("/", PedidoController.obtenerTodos);
router.get("/:idPedido", PedidoController.obtenerPorId);
router.get("/usuario/:idUsuario", PedidoController.obtenerPorUsuario);
router.put("/:idPedido/estado", PedidoController.actualizarEstado); // actualizar estado del pedido

// --- DETALLES DE PEDIDOS ---
router.get("/:idPedido/detalles", PedidoController.obtenerDetalles);
router.post("/detalles", PedidoController.crearDetalle);

export default router;
