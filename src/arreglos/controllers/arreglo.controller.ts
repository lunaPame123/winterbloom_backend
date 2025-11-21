import { Request, Response } from "express";
import { ArregloService } from "../services/arreglo.service";

const arregloService = new ArregloService();

export class ArregloController {

  async obtenerTodos(res: Response) {
    try {
      const data = await arregloService.obtenerTodos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerActivos(res: Response) {
    try {
      const data = await arregloService.obtenerActivos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await arregloService.obtenerPorId(id);
      return res.json(data);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  async buscarPorCategoria(req: Request, res: Response) {
    try {
      const categoria = req.params.categoria;
      const data = await arregloService.buscarPorCategoria(categoria);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async buscarPorNombre(req: Request, res: Response) {
    try {
      const nombre = req.query.nombre as string;
      const data = await arregloService.buscarPorNombre(nombre);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const data = await arregloService.crear(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await arregloService.actualizar(id, req.body);
      return res.json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await arregloService.eliminar(id);
      return res.json({ mensaje: "Arreglo eliminado correctamente (lógico)" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}
