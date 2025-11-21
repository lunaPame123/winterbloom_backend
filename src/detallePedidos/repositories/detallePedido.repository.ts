import { AppDataSource } from "../../database/data-source";
import { DetallePedido } from "../entities/detallepedido.entity"; 

export const DetallePedidoRepository = AppDataSource.getRepository(DetallePedido).extend({
  
  async crearDetallePedido(data: Partial<DetallePedido>) {
    const detalle = this.create(data);
    return await this.save(detalle);
  },

  async crearVariosDetalles(detalles: Partial<DetallePedido>[]) {
    const nuevos = this.create(detalles);
    return await this.save(nuevos);
  },

  async obtenerDetallesPorPedido(idPedido: number) {
    return await this.find({
      where: { pedido: { idPedido } },
      relations: ["arreglo"],
    });
  },

  async eliminarDetalle(idDetalle: number) {
    await this.delete(idDetalle);
  }
});