import { RolRepository } from "../repositories/rol.repository";

export class RolService {
  private repository = new RolRepository();

  async getAll() {
    return this.repository.findAll();
  }

  async create(data: { nombreRol: string; descripcion?: string }) {
    const exists = await this.repository.findByName(data.nombreRol);
    if (exists) throw new Error("El rol ya existe");
    return this.repository.create(data);
  }
}
