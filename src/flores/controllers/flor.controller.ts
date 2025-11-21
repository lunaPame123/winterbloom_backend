import { Request, Response } from "express";
import { FlorService } from "../services/flor.service";

const florService = new FlorService();

export class FlorController {

  async obtenerTodos(res: Response) {
    try {
      const data = await florService.obtenerTodos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerActivos(res: Response) {
    try {
      const data = await florService.obtenerActivos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await florService.obtenerPorId(id);
      return res.json(data);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  async buscarPorColor(req: Request, res: Response) {
    try {
      const color = req.params.color;
      const data = await florService.buscarPorColor(color);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async buscarPorNombre(req: Request, res: Response) {
    try {
      const nombre = req.query.nombre as string;
      const data = await florService.buscarPorNombre(nombre);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const data = await florService.crear(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await florService.actualizar(id, req.body);
      return res.json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await florService.eliminacionLogica(id);
      return res.json({ mensaje: "Flor desactivada correctamente" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}