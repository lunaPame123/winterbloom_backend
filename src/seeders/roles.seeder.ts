import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Rol } from "../roles/entities/rol.entity";

export default class RolesSeeder implements Seeder {
  public async run(): Promise<void> {
    const repo = AppDataSource.getRepository(Rol);
    await repo.save([
      { nombreRol: "administrador", descripcion: "Administrador del sistema" },
      { nombreRol: "cliente", descripcion: "Usuario regular" }
    ]);
  }
}