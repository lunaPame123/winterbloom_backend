import { Request, Response } from "express";
import { PedidoService} from "../services/pedido.service";

const pedidoService = new PedidoService();

export class PedidoController {

  async crearPedido(req: Request, res: Response) {
    try {
      const { pedidoData, detallesData } = req.body;
      const pedido = await pedidoService.crearPedidoConDetalles(pedidoData, detallesData);
      res.status(201).json(pedido);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerTodos(req: Request, res: Response) {
    try {
      const pedidos = await pedidoService.obtenerTodos();
      res.json(pedidos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const idPedido = parseInt(req.params.id);
      const pedido = await pedidoService.obtenerPorId(idPedido);
      res.json(pedido);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const idPedido = parseInt(req.params.id);
      const resultado = await pedidoService.eliminar(idPedido);
      res.json(resultado);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}
