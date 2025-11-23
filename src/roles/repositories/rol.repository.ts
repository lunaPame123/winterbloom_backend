import { AppDataSource } from "../../database/data-source";
import { Rol } from "../entities/rol.entity";

export const RolRepository = AppDataSource.getRepository(Rol).extend({

  async crearRol(data: Partial<Rol>) {
    const existe = await this.findOne({ where: { nombreRol: data.nombreRol } });
    if (existe) throw new Error("El nombre del rol ya está registrado");

    const nuevoRol = this.create(data);
    return await this.save(nuevoRol);
  },

  async listarRoles() {
    return await this.find({ 
      where: { estado: true},
      order: { idRol: "ASC" } 
    });
  },

  async obtenerRolPorId(idRol: number) {
    return await this.findOne({
      where: { idRol, estado: true }
    });
  },

  async actualizarRol(idRol: number, data: Partial<Rol>) {
    await this.update(idRol, data);
    return await this.obtenerRolPorId(idRol);
  },

  async eliminarRol(idRol: number) {
    await this.update(idRol, { estado: false });
    return true;
  }
})