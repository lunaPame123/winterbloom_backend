import { Request, Response } from "express";
import { PersonaService } from "../services/persona.service";

const service = new PersonaService();

export class PersonaController {
  async getPersonas(req: Request, res: Response) {
    try {
      const personas = await service.getAll();
      res.json(personas);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  }

  async createPersona(req: Request, res: Response) {
    try {
      const data = req.body;
      if (!data.correo || !data.contraseña)
        return res.status(400).json({ message: "Correo y contraseña son obligatorios" });

      const persona = await service.create(data);
      res.status(201).json(persona);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}
