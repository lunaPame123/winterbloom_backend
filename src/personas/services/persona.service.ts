import { PersonaRepository } from "../repositories/persona.repository";
import { Persona } from "../entities/persona.entity";

export class PersonaService {
  private repository = new PersonaRepository();

  async getAll(): Promise<Persona[]> {
    return this.repository.findAll();
  }

  async create(data: Partial<Persona>): Promise<Persona> {
    // Validación simple: correo único
    const exists = await this.repository.findByCorreo(data.correo!);
    if (exists) throw new Error("El correo ya está registrado");

    const persona = new Persona();
    persona.nombre = data.nombre!;
    persona.apellidoPaterno = data.apellidoPaterno!;
    persona.apellidoMaterno = data.apellidoMaterno!;
    persona.ci = data.ci!;
    persona.correo = data.correo!;
    persona.rol = data.rol!;
    persona.setPassword(data.contraseña!);

    return this.repository.createAndSave(persona);
  }
}
