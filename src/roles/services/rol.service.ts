import { RolRepository } from "../repositories/rol.repository";

export class RolService {
  async crear(data: any){
    return await RolRepository.crearRol(data);
  }

  async listar(){
    return await RolRepository.listarRoles();
  }
}