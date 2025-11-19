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

    static async listar(req: Request, res: Response){
        try {
            const personas = await service.listarPersonas();
            res.json(personas);
        } catch (error: any){
            res.status(400).json({ error: error.message});
        }
    }

    static async obtener(req: Request, res:Response){
        try{
            const idPersona = parseInt(req.params.idPersona);
            const persona = await service.obtenerPersonaId(idPersona);
            res.json(persona);
        } catch (error: any){
            res.status(404).json({ error: error.message});
        }
    }

    static async actualizar(req: Request, res: Response){
        try {
            const idPersona = parseInt(req.params.idPersona);
            const persona = await service.actualizarPersona(idPersona, req.body);
            res.json(persona);
        } catch (error: any){
            res.status(400).json({ error: error.message});
        }
    }
}
