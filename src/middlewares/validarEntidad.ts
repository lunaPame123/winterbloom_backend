import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { error } from "console";
import { Request, Response, NextFunction } from "express";

export function validarEntidad(DtoClass: any){
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoObjeto = plainToInstance(DtoClass, req.body);
        const errores = await validate(dtoObjeto);

        if (errores.length > 0) {
            const mensajes = errores.map(error => Object.values(error.constraints || {})).flat();
            return res.status(400).json({ errores: mensajes });
        }
        next();
    };
}