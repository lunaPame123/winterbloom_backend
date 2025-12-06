import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Arreglo } from "../arreglos/entities/arreglo.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Estado } from "../auditoria/auditoria.entity";

export default class ArregloSeeder implements Seeder {
  public async run(): Promise<void> {
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuarios = await usuarioRepo.find();

    const arregloRepo = AppDataSource.getRepository(Arreglo);
    await arregloRepo.save([
      {
        nombre: "Arreglo Primavera",
        descripcion: "Flores frescas de temporada",
        precio: 50,
        categoria: "Temporada",
        imagen: "https://i.pinimg.com/1200x/5f/c7/21/5fc721da646b95c1e475914e07117a30.jpg",
        usuarioCreacion: usuarios[0].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[0].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      },
      {
        nombre: "Arreglo Amoroso",
        descripcion: "Rosas Rojas hermosas de temporada",
        precio: 110,
        categoria: "Amor",
        imagen: "https://i.pinimg.com/1200x/8a/b0/44/8ab044e840516f9ccf986cfb7699f21d.jpg",
        usuarioCreacion: usuarios[1].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[1].correo,
        fechaModificacion: new Date(),
        estado: Estado.INACTIVO
      },
      {
        nombre: "Arreglo Aesthetic",
        descripcion: "Flores Amarillas de temporada",
        precio: 95,
        categoria: "Amor",
        imagen: "https://i.pinimg.com/1200x/6c/ef/6b/6cef6bc734185d5671cd1b8b4f6f225f.jpg",
        usuarioCreacion: usuarios[2].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[2].correo,
        fechaModificacion: new Date(),
        estado: Estado.ACTIVO
      }
    ]);
  }
}