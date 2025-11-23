import { Router } from "express";
import { DetallePedidoController } from "../controllers/detallePedido.controller";

const router = Router();
const detalleController = new DetallePedidoController();

router.get("/pedido/:idPedido", (req, res) => detalleController.obtenerPorPedido(req, res));
router.post("/", (req, res) => detalleController.crearDetalle(req, res));
router.delete("/:id", (req, res) => detalleController.eliminarDetalle(req, res));

export default router;
