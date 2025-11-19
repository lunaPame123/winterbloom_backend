import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";

const service = new UsuarioService();

export class UsuarioController {
  static async crear(req: Request, res: Response) {
    try {
      const usuario = await service.crearUsuario(req.body);
      res.json(usuario);
    } catch (error : any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async listar (req: Request, res: Response){
    try {
      const usuarios = await service.listarUsuario();
      res.json(usuarios);
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }

  static async obtener (req: Request, res: Response){
    try {
      const idUsuarioObtenido = parseInt(req.params.idUsuarioObtenido);
      const usuario = await service.obtenerUsuario(idUsuarioObtenido);
      res.json(usuario);
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }

  static async actualizar (req: Request, res: Response){
    try {
      const idUsuarioActualizado = parseInt(req.params.idUsuarioActualizado);
      const usuario = await service.actualizarUsuario(idUsuarioActualizado, req.body);
      res.json(usuario);
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }

  static async eliminar (req: Request, res: Response){
    try {
      const idUsuarioEliminado = parseInt(req.params.idUsuarioEliminado);
      await service.eliminarUsuario(idUsuarioEliminado);
      res.json({ message: "Usuario eliminado (logicamente)" });
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }
}