import { Seeder } from "typeorm-extension";
import { AppDataSource } from "../database/data-source";
import { Persona } from "../personas/entities/persona.entity";

export default class PersonaSeeder implements Seeder {
  public async run(): Promise<void> {
    const repo = AppDataSource.getRepository(Persona);

    const personas = [
      { ci: "12345678", nombre: "Pamela", apellidoPaterno: "Canaza", apellidoMaterno: "Lopez", ciudad: "La Paz", fechaNacimiento: new Date("1999-12-31"), sexo: "F" },
      { ci: "87654321", nombre: "Juan", apellidoPaterno: "Perez", apellidoMaterno: "Gomez", ciudad: "La Paz", fechaNacimiento: new Date("1995-05-11"), sexo: "M" },
      { ci: "11223344", nombre: "Maria", apellidoPaterno: "Lopez", apellidoMaterno: "Diaz", ciudad: "La Paz", fechaNacimiento: new Date("1998-07-20"), sexo: "F" },
      { ci: "44332211", nombre: "Carlos", apellidoPaterno: "Gonzalez", apellidoMaterno: "Martinez", ciudad: "La Paz", fechaNacimiento: new Date("1992-09-14"), sexo: "M" }
    ];

    for (const p of personas) {
      const exists = await repo.findOneBy({ ci: p.ci });
      if (!exists) {
        await repo.save(p);
      }
    }
  }
}