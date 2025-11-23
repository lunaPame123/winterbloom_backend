import { PersonaRepository } from "../repositories/persona.repository";
import { Persona } from "../entities/persona.entity";

export class PersonaService {
  async crearPersona(data: Partial<Persona>){
    const existe = await PersonaRepository.buscarPorCi(data.ci!);
    if (existe) throw new Error ("La persona con este carnet de identidad ya esta registrada");

    return PersonaRepository.crearPersona(data);
  }

  async listarPersonas(){
    return PersonaRepository.listarConUsuarios();
  }

  async obtenerPersonaPorId(idPersona: number){
    const persona = await PersonaRepository.buscarPorId(idPersona);
    if (!persona) throw new Error("Persona no encontrada");
    return persona;
  }

  async actualizarPersona (idPersona: number, data: Partial<Persona>) {
    const persona = await PersonaRepository.buscarPorId(idPersona);
    if (!persona) throw new Error ("Persona no encontrada");

    return PersonaRepository.actualizarPersona(idPersona, data);
  }
}
