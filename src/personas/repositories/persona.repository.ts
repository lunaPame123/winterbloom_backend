import { AppDataSource } from "../../database/data-source";
import { Persona } from "../entities/persona.entity";
import { Repository } from "typeorm";

export class PersonaRepository {
  private repo: Repository<Persona>;

  constructor() {
    this.repo = AppDataSource.getRepository(Persona);
  }

  async findAll() {
    return this.repo.find({ relations: ["rol"] });
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { idPersona: id }, relations: ["rol"] });
  }

  async findByCorreo(correo: string) {
    return this.repo.findOne({ where: { correo }, relations: ["rol"] });
  }

  async createAndSave(data: Partial<Persona>): Promise<Persona> {
    const persona = this.repo.create(data);
    return this.repo.save(persona);
  }
}
