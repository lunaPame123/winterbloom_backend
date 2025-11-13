import { AppDataSource } from "../../database/data-source";
import { Rol } from "../entities/rol.entity";
import { Repository } from "typeorm";

export class RolRepository {
  private repo: Repository<Rol>;

  constructor() {
    this.repo = AppDataSource.getRepository(Rol);
  }

  async findAll() {
    return this.repo.find();
  }

  async findByName(nombreRol: string) {
    return this.repo.findOneBy({ nombreRol });
  }

  async create(data: Partial<Rol>) {
    const rol = this.repo.create(data);
    return this.repo.save(rol);
  }
}
