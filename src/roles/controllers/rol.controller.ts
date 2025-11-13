import { Request, Response } from "express";
import { RolService } from "../services/rol.service";

const service = new RolService();

export class RolController {
  async getRoles(req: Request, res: Response) {
    try {
      const roles = await service.getAll();
      res.json(roles);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  }

  async createRol(req: Request, res: Response) {
    try {
      const { nombreRol, descripcion } = req.body;
      if (!nombreRol)
        return res.status(400).json({ message: "nombreRol es requerido" });

      const rol = await service.create({ nombreRol, descripcion });
      res.status(201).json(rol);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}
