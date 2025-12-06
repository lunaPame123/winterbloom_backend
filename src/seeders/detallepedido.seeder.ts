import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";
import { DetallePedido } from "../pedidos/entities/detallepedido.entity";
import { Pedido } from "../pedidos/entities/pedido.entity";
import { Arreglo } from "../arreglos/entities/arreglo.entity";

export default class DetallePedidoSeeder implements Seeder {
  public async run(): Promise<void> {
    const pedidoRepo = AppDataSource.getRepository(Pedido);
    const pedidos = await pedidoRepo.find();

    const arregloRepo = AppDataSource.getRepository(Arreglo);
    const arreglos = await arregloRepo.find();

    const detalleRepo = AppDataSource.getRepository(DetallePedido);
    await detalleRepo.save([
      {
        idPedido: pedidos[0].idPedido,
        idArreglo: arreglos[0].idArreglo,
        precioUnitario: arreglos[0].precio,
        cantidad: 1,
        subtotal: arreglos[0].precio * 1
      },
      {
        idPedido: pedidos[1].idPedido,
        idArreglo: arreglos[1].idArreglo,
        precioUnitario: arreglos[1].precio,
        cantidad: 1,
        subtotal: arreglos[1].precio * 1
      }
    ]);
  }
}