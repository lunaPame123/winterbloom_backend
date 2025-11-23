import { Request, Response } from "express";
import { ComposicionArregloService } from "../../arreglos/services/composicionArreglo.service";

const composicionService = new ComposicionArregloService();

export class ComposicionArregloController {

  async obtenerTodos(req: Request, res: Response) {
    try {
      const data = await composicionService.obtenerTodos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await composicionService.obtenerPorId(id);
      return res.json(data);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  async obtenerPorArreglo(req: Request, res: Response) {
    try {
      const idArreglo = Number(req.params.idArreglo);
      const data = await composicionService.obtenerPorArreglo(idArreglo);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerPorFlor(req: Request, res: Response) {
    try {
      const idFlor = Number(req.params.idFlor);
      const data = await composicionService.obtenerPorFlor(idFlor);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const data = await composicionService.crear(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await composicionService.actualizar(id, req.body);
      return res.json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await composicionService.eliminacionLogica(id);
      return res.json({ mensaje: "Composición eliminada correctamente (lógica)" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}