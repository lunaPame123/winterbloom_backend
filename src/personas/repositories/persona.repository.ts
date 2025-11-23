import { AppDataSource } from "../../database/data-source";
import { Persona } from "../entities/persona.entity";

export const PersonaRepository = AppDataSource.getRepository(Persona).extend({

  async buscarPorId(idPersona: number) {
    return this.findOne({
      where: { idPersona },
      relations: ["usuario"],
    });
  },

  async buscarPorCi(ci: string) {
    return this.findOne({ where: { ci } });
  },

  async listarConUsuarios() {
    return this.find({
      relations: ["usuario"],
      order: { idPersona: "ASC" }
    });
  },

  async crearPersona(data: Partial<Persona>) {
    const persona = this.create(data);
    return this.save(persona);
  },

  async actualizarPersona(idPersona: number, data: Partial<Persona>) {
    await this.update(idPersona, data);
    return this.buscarPorId(idPersona);
  },

});