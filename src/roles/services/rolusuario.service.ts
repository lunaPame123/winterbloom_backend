import { Rol } from "../entities/rol.entity";
import { RolUsuarioRepository } from "../repositories/rolusuario.repository";

export class RolUsuarioService {
    async asignar(idUsuario: number, idRol: number){
        return await RolUsuarioRepository.asignarRol(idUsuario, idRol);
    }

    async eliminar(idUsuarioRol: number){
        return await RolUsuarioRepository.eliminarRol(idUsuarioRol);
    }
}