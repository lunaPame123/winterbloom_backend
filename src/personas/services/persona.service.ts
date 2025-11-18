import { PersonaRepository } from "../repositories/persona.repository";

export class PersonaService {
  async crearPersonas(data: any){
    const existe = await PersonaRepository.buscarPorCi(data.ci);
    if (existe) throw new Error ("El CI ya esta registrado");

    return await PersonaRepository.crearPersona(data);
  }

  async listarPersonas(){
    return await PersonaRepository.listarConUsuarios();
  }

  async obtenerPersonaId(idPersona: number){
    const persona = await PersonaRepository.buscarPorId(idPersona);
    if (!persona) throw new Error("Persona no encontrada");
    return persona;
  }

  async actualizarPersona (idPersona: number, data: any){
    const persona = await PersonaRepository.buscarPorId(idPersona);
    if (!persona) throw new Error ("Persona no encontrada");

    return await PersonaRepository.actualizarPersona(idPersona, data);
  }
}
