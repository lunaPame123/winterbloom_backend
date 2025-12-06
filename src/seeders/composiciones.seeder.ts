import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Arreglo } from "../arreglos/entities/arreglo.entity";
import { Flor } from "../flores/entities/flor.entity";
import { ComposicionArreglo } from "../arreglos/entities/composicionArreglo.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Estado } from "../auditoria/auditoria.entity";

export default class ComposicionArregloSeeder implements Seeder {
  public async run(): Promise<void> {
    const arregloRepo = AppDataSource.getRepository(Arreglo);
    const florRepo = AppDataSource.getRepository(Flor);
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const composicionRepo = AppDataSource.getRepository(ComposicionArreglo);

    // Obtener datos existentes
    const arreglos = await arregloRepo.find();
    const flores = await florRepo.find();
    const usuarios = await usuarioRepo.find();

    if (arreglos.length === 0 || flores.length === 0) {
      console.log("⚠️ No hay arreglos o flores para crear composiciones.");
      return;
    }

    const composiciones: ComposicionArreglo[] = [];

    // Generar composiciones automáticas
    arreglos.forEach((arreglo, index) => {
      const flor1 = flores[index % flores.length];
      const flor2 = flores[(index + 1) % flores.length];

      composiciones.push(
        composicionRepo.create({
          arreglo: arreglo,         // relación ManyToOne
          flor: flor1,              // relación ManyToOne
          cantidad: 3,
          usuarioCreacion: usuarios[0]?.correo || "system",
          fechaCreacion: new Date(),
          usuarioModificacion: usuarios[0]?.correo || "system",
          fechaModificacion: new Date(),
          estado: Estado.ACTIVO,
        }),
        composicionRepo.create({
          arreglo: arreglo,
          flor: flor2,
          cantidad: 2,
          usuarioCreacion: usuarios[0]?.correo || "system",
          fechaCreacion: new Date(),
          usuarioModificacion: usuarios[0]?.correo || "system",
          fechaModificacion: new Date(),
          estado: Estado.ACTIVO,
        })
      );
    });

    await composicionRepo.save(composiciones);
    console.log(`🌱 Se generaron ${composiciones.length} composiciones de arreglos.`);
  }
}