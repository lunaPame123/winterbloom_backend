import { Request, Response } from "express";
import { RolService } from "../services/rol.service";

const service = new RolService();

export class RolController {
  static async crear( req: Request, res: Response){
    try {
      const rol = await service.crear(req.body);
      res.json(rol);
    } catch (error: any){
      res.status(400).json({ error: error.message});
    }
  }

  static async listar(req: Request, res: Response){
    try {
      const roles = await service.listar();
      res.json(roles);
    } catch (error: any){
      res.status(400).json({ error: error.message });
    }
  }
}