import { Request, Response } from "express";
import { PersonaService } from "../services/persona.service";

const service = new PersonaService();

export class PersonaController {
    static async crear (req: Request, res: Response){
        try {
            const persona = await service.crearPersonas(req.body);
            res.json(persona);
        } catch(error: any){
            res.status(400).json({error: error.message});
        }
    }
}
