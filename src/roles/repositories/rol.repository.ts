import { AppDataSource } from "../../database/data-source";
import { Rol } from "../entities/rol.entity";

export const RolRepository = AppDataSource.getRepository(Rol).extend({

  async crearRol(data: Partial<Rol>) {
    const existe = await this.findOne({ where: { nombreRol: data.nombreRol } });
    if (existe) throw new Error("El Rol ya existe");

    const rol = this.create(data);
    return await this.save(rol);
  },

  async listarRoles() {
    return await this.find({ order: { idRol: "ASC" } });
  }
})