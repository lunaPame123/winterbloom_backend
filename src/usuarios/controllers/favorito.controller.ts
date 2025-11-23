import { Request, Response } from "express";
import { FavoritoService } from "../../usuarios/services/favorito.service";

const favoritoService = new FavoritoService();

export class FavoritoController {

  async obtenerTodos(req: Request, res: Response) {
    try {
      const data = await favoritoService.obtenerTodos();
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await favoritoService.obtenerPorId(id);
      return res.json(data);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  async obtenerPorUsuario(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.idUsuario);
      const data = await favoritoService.obtenerPorUsuario(idUsuario);
      return res.json(data);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const data = await favoritoService.crear(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await favoritoService.eliminacionLogica(id);
      return res.json({ mensaje: "Favorito eliminado correctamente" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}