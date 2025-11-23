import { Rol } from "../entities/rol.entity";
import { RolRepository } from "../repositories/rol.repository";

export class RolService {
  async crear(data: Partial<Rol>){
    return await RolRepository.crearRol(data);
  }

  async listar(){
    return await RolRepository.listarRoles();
  }

  async obtenerPorId(idRol: number) {
    const rol = await RolRepository.obtenerRolPorId(idRol);
    if (!rol) throw new Error("El rol no existe");
    return rol;
  }

  async actualizar(idRol: number, data: Partial<Rol>) {
    await this.obtenerPorId(idRol); 
    return await RolRepository.actualizarRol(idRol, data);
  }

  async eliminar(idRol: number) {
    await this.obtenerPorId(idRol);
    return await RolRepository.eliminarRol(idRol);
  }
}