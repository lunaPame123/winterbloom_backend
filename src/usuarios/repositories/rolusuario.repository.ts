import { AppDataSource } from "../../database/data-source";
import { RolUsuario } from "../entities/rolusuario.entity";

export const RolUsuarioRepository = AppDataSource.getRepository(RolUsuario). extend({

    async asignarRol(idUsuario: number, idRol: number){
        const nuevaAsignacion = this.create({
            usuario: { idUsuario},
            rol: { idRol }
        });
        return await this.save(nuevaAsignacion);
    },

    async eliminarAsignacionDeRol(idUsuarioRol: number){
        await this.delete(idUsuarioRol);
        return true;
    }
})