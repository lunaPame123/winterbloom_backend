import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";
import { RolUsuarioService } from "../services/rolusuario.service";
import { FavoritoService } from "../services/favorito.service";

const usuarioService = new UsuarioService();
const rolUsuarioService = new RolUsuarioService();
const favoritoService = new FavoritoService();

export class UsuarioController {
  //----------- USUARIOS -----------------------
  static async crearUsuario(req: Request, res: Response) {
    try {
      const usuario = await usuarioService.crearUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async listarUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await usuarioService.listarUsuario();
      res.json(usuarios);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async obtenerUsuario(req: Request, res: Response) {
    try {
      const idUsuario = parseInt(req.params.idUsuario);
      const usuario = await usuarioService.obtenerUsuario(idUsuario);
      res.json(usuario);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  static async actualizarUsuario(req: Request, res: Response) {
    try {
      const idUsuario = parseInt(req.params.idUsuario);
      const usuario = await usuarioService.actualizarUsuario(idUsuario, req.body);
      res.json(usuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async eliminarUsuario(req: Request, res: Response) {
    try {
      const idUsuario = parseInt(req.params.idUsuario);
      await usuarioService.eliminarUsuario(idUsuario);
      res.json({ mensaje: "Usuario eliminado (lógicamente)" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  //----------- ASIGNACION DE ROLES -------------
  static async asignarRol(req: Request, res: Response) {
    try {
      const { idUsuario, idRol } = req.body;
      const resultado = await rolUsuarioService.asignarRolAUsuario(idUsuario, idRol);
      res.json(resultado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async eliminarRol(req: Request, res: Response) {
    try {
      const idUsuarioRol = parseInt(req.params.idUsuarioRol);
      await rolUsuarioService.eliminarAsignacionDeRol(idUsuarioRol);
      res.json({ mensaje: "Rol eliminado del usuario" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // -------------- FAVORITOS ---------------
  static async listarFavoritos(req: Request, res: Response) {
    try {
      const favoritos = await favoritoService.listarTodosFavoritos();
      res.json(favoritos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerFavorito(req: Request, res: Response) {
    try {
      const idFavorito = parseInt(req.params.idFavorito);
      const favorito = await favoritoService.obtenerFavoritoPorId(idFavorito);
      res.json(favorito);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  static async listarFavoritosPorUsuario(req: Request, res: Response) {
    try {
      const idUsuario = parseInt(req.params.idUsuario);
      const favoritos = await favoritoService.listarFavoritosPorUsuario(idUsuario);
      res.json(favoritos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async crearFavorito(req: Request, res: Response) {
    try {
      const nuevoFavorito = await favoritoService.crearFavorito(req.body);
      res.status(201).json(nuevoFavorito);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async eliminarFavorito(req: Request, res: Response) {
    try {
      const idFavorito = parseInt(req.params.idFavorito);
      await favoritoService.eliminarFavorito(idFavorito);
      res.json({ mensaje: "Favorito eliminado correctamente" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
