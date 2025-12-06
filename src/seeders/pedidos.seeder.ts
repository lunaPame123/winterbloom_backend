import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { Pedido } from "../pedidos/entities/pedido.entity";
import { Usuario } from "../usuarios/entities/usuario.entity";
import { Estado } from "../auditoria/auditoria.entity";

export default class PedidoSeeder implements Seeder {
  public async run(): Promise<void> {
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuarios = await usuarioRepo.find();

    const pedidoRepo = AppDataSource.getRepository(Pedido);
    await pedidoRepo.save([
      {
        idUsuario: usuarios[1].idUsuario,
        fechaPedido: new Date(),
        total: 50,
        estado: Estado.PENDIENTE,
        usuarioCreacion: usuarios[1].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[1].correo,
        fechaModificacion: new Date()
      },
      {
        idUsuario: usuarios[2].idUsuario,
        fechaPedido: new Date(),
        total: 95,
        estado: Estado.PENDIENTE,
        usuarioCreacion: usuarios[2].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[2].correo,
        fechaModificacion: new Date()
      },
      {
        idUsuario: usuarios[3].idUsuario,
        fechaPedido: new Date(),
        total: 110,
        estado: Estado.PENDIENTE,
        usuarioCreacion: usuarios[3].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[3].correo,
        fechaModificacion: new Date()
      },
      {
        idUsuario: usuarios[4].idUsuario,
        fechaPedido: new Date(),
        total: 85,
        estado: Estado.ACTIVO,
        usuarioCreacion: usuarios[4].correo,
        fechaCreacion: new Date(),
        usuarioModificacion: usuarios[4].correo,
        fechaModificacion: new Date()
      }
    ]);
  }
}