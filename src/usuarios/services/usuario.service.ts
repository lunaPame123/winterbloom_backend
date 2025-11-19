import { UsuarioRepository } from "../repositories/usuario.repository";

export class UsuarioService {
  async crearUsuario(data: any) {
    const existe = await UsuarioRepository.buscarPorCorreo(data.correo);
    if (existe) throw new Error ("El correo ya esta regustrado");

    return await UsuarioRepository.crearUsuario(data);
  }

  async listarUsuario(){
    return await UsuarioRepository.listarUsuarios();
  }

  async obtenerUsuario(idUsuarioObtenido: number){
    const usuario = await UsuarioRepository.findOne({ where: { idUsuario: idUsuarioObtenido }, relations: ["persona", "roles"] });
    if (!usuario) throw new Error ("Usuario no encontrado");
    return usuario;
  }

  async actualizarUsuario(idUsuarioActualizado: number, data: any) {
    const usuario = await UsuarioRepository.findOne({ where: { idUsuario: idUsuarioActualizado} });
    if (!usuario) throw new Error("Usuario no encontrado");
    return await UsuarioRepository.actualizarUsuario(idUsuarioActualizado, data);
  }

  async eliminarUsuario(idUsuarioEliminado: number) {
    const usuario = await UsuarioRepository.findOne({ where: {idUsuario: idUsuarioEliminado} });
    if (!usuario) throw new Error("Usuario no encontrado");
    return await UsuarioRepository.eliminarUsuario(idUsuarioEliminado);
  }
}