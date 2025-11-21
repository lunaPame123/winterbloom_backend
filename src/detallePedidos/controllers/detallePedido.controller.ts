import { Request, Response } from "express";
import { DetallePedidoService } from "../services/detallePedido.service";

const detalleService = new DetallePedidoService();

export class DetallePedidoController {

  async obtenerPorPedido(req: Request, res: Response) {
    try {
      const idPedido = parseInt(req.params.idPedido);
      const detalles = await detalleService.obtenerPorPedido(idPedido);
      res.json(detalles);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearDetalle(req: Request, res: Response) {
    try {
      const detalleData = req.body;
      const detalle = await detalleService.crearDetalle(detalleData);
      res.status(201).json(detalle);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarDetalle(req: Request, res: Response) {
    try {
      const idDetalle = parseInt(req.params.id);
      const resultado = await detalleService.eliminarDetalle(idDetalle);
      res.json(resultado);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}
