import { AppDataSource } from "../../database/data-source";
import { RolUsuario } from "../entities/rolUsuario.entity";

export const RolUsuarioRepository = AppDataSource.getRepository(RolUsuario). extend({

    async asignarRol(idUsuario: number, idRol: number){
        const rolUsuario = this.create({
            usuario: { idUsuario},
            rol: { idRol }
        });
        return await this.save(rolUsuario);
    },

    async eliminarRol(idUsuarioRol: number){
        await this.delete(idUsuarioRol);
        return true;
    }
})