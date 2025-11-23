import { UsuarioRepository } from "../repositories/usuario.repository";
import { Usuario } from "../entities/usuario.entity";

export class UsuarioService {
  async crearUsuario(data: Partial<Usuario>) {
    const usuarioExistente = await UsuarioRepository.buscarPorCorreo(data.correo!);
    if (usuarioExistente) throw new Error ("El correo ya esta registrado");

    return await UsuarioRepository.crearUsuario(data);
  }

  async listarUsuario(){
    return await UsuarioRepository.listarUsuarios();
  }

  async obtenerUsuario(idUsuario: number){
    const usuario = await UsuarioRepository.findOne({
      where : { idUsuario},
      relations: [ "persona", "roles"]
    });
    if (!usuario) throw new Error ("Usuario no encontrado");
    return usuario;
  }

  async actualizarUsuario(idUsuario: number, data: Partial<Usuario>) {
    const usuario = await UsuarioRepository.findOne({ where: { idUsuario } });
    if (!usuario) throw new Error("Usuario no encontrado");
    return await UsuarioRepository.actualizarUsuario(idUsuario, data);
  }

  async eliminarUsuario(idUsuario: number) {
    const usuario = await UsuarioRepository.findOne({ where: { idUsuario } });
    if (!usuario) throw new Error("Usuario no encontrado");
    return await UsuarioRepository.eliminarUsuario(idUsuario);
  }
}