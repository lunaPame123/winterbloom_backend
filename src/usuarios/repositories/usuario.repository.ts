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
      const salt = await bcrypt.genSalt(10);
      data.contrasena = await bcrypt.hash(data.contrasena, salt);
    }
    const usuario = this.create(data);
    return await this.save(usuario);
  },

  async actualizarUsuario(idUsuarioActualizado: number, data: Partial<Usuario>){
    if (data.contrasena){
      const salt = await bcrypt.genSalt(10);
      data.contrasena = await bcrypt.hash(data.contrasena, salt);
    }
    await this.update(idUsuarioActualizado, data);
    return await this.findOne({ where: { idUsuario: idUsuarioActualizado}, relations: ["persona", "roles"] });
  },

  async eliminarUsuario(idUsuario: number){
    await this.update(idUsuario, { estado: false });
    return true;
  }
})