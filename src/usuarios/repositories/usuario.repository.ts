import { AppDataSource } from "../../database/data-source";
import { Usuario } from "../entities/usuario.entity";
import bcrypt from "bcryptjs";

export const UsuarioRepository = AppDataSource.getRepository(Usuario).extend({

  async buscarPorCorreo(correo: string){
    return await this.findOne({ where: { correo }, relations: ["persona", "roles"] });
  },

  async listarUsuarios(){
    return await this.find({ relations: ["persona", "roles"], order: {idUsuario: "ASC"} });
  },

  async crearUsuario (data: Partial<Usuario>){
    if (data.contrasena){
      data.contrasena = await this.encriptarContrasena(data.contrasena);
    }
    const nuevoUsuario = this.create(data);
    return await this.save(nuevoUsuario);
  },

  async actualizarUsuario(idUsuario: number, data: Partial<Usuario>){
    if (data.contrasena){
      data.contrasena = await this.encriptarContrasena(data.contrasena);
    }
    await this.update(idUsuario, data);
    return await this.findOne({ where: { idUsuario }, relations: ["persona", "roles"] });
  },

  async eliminarUsuario(idUsuario: number){
    await this.update(idUsuario, { estado: false });
    return true;
  },

  async encriptarContrasena(contrasena: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(contrasena, salt);
  }
})