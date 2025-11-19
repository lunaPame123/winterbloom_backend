import { Request, Response } from "express";
import { RolUsuarioService } from "../services/rolusuario.service";
import { join } from "path";
import { json } from "stream/consumers";

const service = new RolUsuarioService();

export class RolUsuarioController {
    static async asignar(req: Request, res: Response){
        try{
            const { idUsuario, idRol } = req.body;
            const resultado = await service.asignar(idUsuario, idRol);
            res.json(resultado);
        } catch (error: any){
            res.status(400).json({ error: error.message });
        }
    }

    static async eliminar(req: Request, res: Response){
        try {
            const idUsuario = parseInt(req.params.idUsuario);
            await service.eliminar(idUsuario);
            res.json({ message: "Rol eliminado del usuario"});
        } catch (error: any){
            res.status(400).json({error: error.message });
        }
    }
}