import { Request, Response } from "express";
import { PedidoService} from "../services/pedido.service";
import { DetallePedidoService } from "../services/detallePedido.service";

const pedidoService = new PedidoService();
const detalleService = new DetallePedidoService();

export class PedidoController {
  
  // --- PEDIDOS ---

  static async crearPedido(req: Request, res: Response) {
    try {
      const { pedido, detalles } = req.body;
      const pedidoCreado = await pedidoService.crearPedidoConDetalles(pedido, detalles);
      return res.status(201).json(pedidoCreado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async obtenerTodos(req: Request, res: Response) {
    try {
      const pedidos = await pedidoService.obtenerTodos();
      return res.json(pedidos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerPorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.idPedido);
      const pedido = await pedidoService.obtenerPorId(id);
      return res.json(pedido);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  static async obtenerPorUsuario(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.idUsuario);
      const pedidos = await pedidoService.obtenerPorUsuario(idUsuario);
      return res.json(pedidos);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async actualizarEstado(req: Request, res: Response) {
    try {
      const id = Number(req.params.idPedido);
      const { estado } = req.body; // pendiente | listo | entregado | cancelado
      const pedidoActualizado = await pedidoService.actualizarEstado(id, estado);
      return res.json(pedidoActualizado);
    } catch (error: any) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  // --- DETALLES DE PEDIDOS ---

  static async obtenerDetalles(req: Request, res: Response) {
    try {
      const idPedido = Number(req.params.idPedido);
      const detalles = await detalleService.obtenerPorPedido(idPedido);
      return res.json(detalles);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async crearDetalle(req: Request, res: Response) {
    try {
      const detalleCreado = await detalleService.crearDetalle(req.body);
      return res.status(201).json(detalleCreado);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}
