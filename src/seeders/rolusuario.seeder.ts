import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { RolUsuario } from "../usuarios/entities/rolusuario.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Rol } from "../roles/entities/rol.entity";


export default class RolUsuarioSeeder implements Seeder {
  public async run(): Promise<void> {
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuarios = await usuarioRepo.find();


    const rolRepo = AppDataSource.getRepository(Rol);
    const roles = await rolRepo.find();


    const repo = AppDataSource.getRepository(RolUsuario);


    await repo.save([
      { usuario: { idUsuario: usuarios[0].idUsuario }, rol: { idRol: roles.find(r => r.nombreRol === "ADMIN")!.idRol } },
      { usuario: { idUsuario: usuarios[1].idUsuario }, rol: { idRol: roles.find(r => r.nombreRol === "CLIENTE")!.idRol } },
      { usuario: { idUsuario: usuarios[2].idUsuario }, rol: { idRol: roles.find(r => r.nombreRol === "CLIENTE")!.idRol } }
    ]);
  }
}
