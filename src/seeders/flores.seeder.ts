import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Flor } from "../flores/entities/flor.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Estado } from "../auditoria/auditoria.entity";

export default class FlorSeeder implements Seeder {
  public async run(): Promise<void> {
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuarios = await usuarioRepo.find();

    const florRepo = AppDataSource.getRepository(Flor);
    await florRepo.save([
      {
        nombreFlor: "Rosa",
        color: "Rojo",
        significado: "Amor",
        precio: 10,
        imagen: "https://i.pinimg.com/1200x/2e/3d/10/2e3d10d53b2028f06042bbc308c848c6.jpg",
        usuarioCreacion: usuarios[0].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[0].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      },
      {
        nombreFlor: "Lirio",
        color: "Blanco",
        significado: "Pureza",
        precio: 15,
        imagen: "https://i.pinimg.com/736x/2a/f5/ba/2af5baf1e8a47b971aa8dee58cdf0c58.jpg",
        usuarioCreacion: usuarios[1].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[1].correo,
        fechaModificacion: new Date(),
        estado: Estado.INACTIVO
      },
      {
        nombreFlor: "Margaritas",
        color: "Blanco",
        significado: "Paz",
        precio: 9,
        imagen: "https://i.pinimg.com/736x/33/89/0b/33890beeda73ca59031a60aa1c1b2581.jpg",
        usuarioCreacion: usuarios[1].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[1].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      }
    ]);
  }
}