import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Persona } from "../personas/entities/persona.entity";

export default class UsuarioSeeder implements Seeder {
  public async run(): Promise<void> {
    const repo = AppDataSource.getRepository(Usuario);
    const personaRepo = AppDataSource.getRepository(Persona);

    const usuarios = [
      { correo: "pamela@mail.com", contrasena: "1234", ciPersona: "12345678" },
      { correo: "juan@mail.com", contrasena: "1234", ciPersona: "87654321" },
      { correo: "maria@mail.com", contrasena: "1234", ciPersona: "11223344" },
      { correo: "carlos@mail.com", contrasena: "1234", ciPersona: "44332211" }
    ];

    for (const u of usuarios) {
      const exists = await repo.findOneBy({ correo: u.correo });
      if (!exists) {
        const persona = await personaRepo.findOneBy({ ci: u.ciPersona });
        if (persona) {
          await repo.save({ correo: u.correo, contrasena: u.contrasena, persona });
        }
      }
    }
  }
}
