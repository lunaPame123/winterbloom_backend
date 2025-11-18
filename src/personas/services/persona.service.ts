import { PersonaRepository } from "../repositories/persona.repository";

export class PersonaService {
  async crear(data: any){
    const existe = await PersonaRepository.buscarPorCi(data.ci);
    if (existe) throw new Error ("El CI ya esta registrado");

    return await PersonaRepository.crearPersona(data);
  }
}
