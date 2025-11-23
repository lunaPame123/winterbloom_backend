import { RolUsuarioRepository } from "../repositories/rolusuario.repository";

export class RolUsuarioService {
    async asignarRolAUsuario(idUsuario: number, idRol: number){
        return await RolUsuarioRepository.asignarRol(idUsuario, idRol);
    }

    async eliminarAsignacionDeRol(idUsuarioRol: number){
        const asignacionExistente = await RolUsuarioRepository.findOne({
            where: { idUsuarioRol, estado: true }
        });
        if (!asignacionExistente){
            throw new Error("La asignacion de rol no existe o ya fue eliminada");
        }
        return await RolUsuarioRepository.eliminarAsignacionDeRol(idUsuarioRol);
    }
}