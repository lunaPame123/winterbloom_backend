import { Request, Response } from "express";
import { RolService } from "../services/rol.service";

const rolService = new RolService();

export class RolController {
  static async crear( req: Request, res: Response){
    try {
      const nuevoRol = await rolService.crear(req.body);
      res.json(nuevoRol);
    } catch (error: any){
      res.status(400).json({ error: error.message});
    }
  }

  static async listar(req: Request, res: Response){
    try {
      const roles = await rolService.listar();
      res.json(roles);
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }

  static async obtener(req: Request, res: Response) {
    try {
      const idRol = parseInt(req.params.idRol);
      const rol = await rolService.obtenerPorId(idRol);
      res.json(rol);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  static async actualizar(req: Request, res: Response) {
    try {
      const idRol = parseInt(req.params.idRol);
      const rol = await rolService.actualizar(idRol, req.body);
      res.json(rol);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      const idRol = parseInt(req.params.idRol);
      await rolService.eliminar(idRol);
      res.json({ mensaje: "Rol eliminado (lógicamente)" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}