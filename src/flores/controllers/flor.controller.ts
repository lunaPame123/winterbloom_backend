import { Request, Response } from "express";
import { FlorService } from "../services/flor.service";

const florService = new FlorService();

export class FlorController {

  static async obtenerTodas(req: Request, res: Response) {
    try {
      const flores = await florService.obtenerTodas();
      return res.json(flores);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async obtenerActivas(req: Request, res: Response) {
    try {
      const floresActivas = await florService.obtenerActivas();
      return res.json(floresActivas);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.idFlor);
      const flor = await florService.obtenerPorId(id);
      return res.json(flor);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  static async buscarPorColor(req: Request, res: Response) {
    try {
      const color = req.params.color;
      const flores = await florService.buscarPorColor(color);
      return res.json(flores);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async buscarPorNombre(req: Request, res: Response) {
    try {
      const nombreFlor = req.query.nombre as string;
      const flores = await florService.buscarPorNombre(nombreFlor);
      return res.json(flores);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async crearFlor(req: Request, res: Response) {
    try {
      const nuevaFlor = await florService.crear(req.body);
      return res.status(201).json(nuevaFlor);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async actualizarFlor(req: Request, res: Response) {
    try {
      const id = Number(req.params.idFlor);
      const florActualizada = await florService.actualizar(id, req.body);
      return res.json(florActualizada);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.idFlor);
      await florService.eliminacionLogica(id);
      return res.json({ mensaje: "Flor desactivada correctamente" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}