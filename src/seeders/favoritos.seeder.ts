import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Favorito } from "../usuarios/entities/favorito.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Arreglo } from "../arreglos/entities/arreglo.entity";
import { Estado } from "../auditoria/auditoria.entity";

export default class FavoritoSeeder implements Seeder {
  public async run(): Promise<void> {
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuarios = await usuarioRepo.find();

    const arregloRepo = AppDataSource.getRepository(Arreglo);
    const arreglos = await arregloRepo.find();

    const favoritoRepo = AppDataSource.getRepository(Favorito);
    await favoritoRepo.save([
      {
        idUsuario: usuarios[1].idUsuario,
        idArreglo: arreglos[0].idArreglo,
        usuarioCreacion: usuarios[1].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[1].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      },
      {
        idUsuario: usuarios[2].idUsuario,
        idArreglo: arreglos[1].idArreglo,
        usuarioCreacion: usuarios[2].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[2].correo,
        fechaModificacion: new Date(),
        estado: Estado.INACTIVO
      },
      {
        idUsuario: usuarios[3].idUsuario,
        idArreglo: arreglos[2].idArreglo,
        usuarioCreacion: usuarios[3].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[3].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      }
    ]);
  }
}