import { AppDataSource } from "../../database/data-source";
import { DetallePedido } from "../entities/detallepedido.entity"; 

export const DetallePedidoRepository = AppDataSource.getRepository(DetallePedido).extend({
  
  async crearDetallePedido(data: Partial<DetallePedido>) {
    const nuevoDetalle = this.create(data);
    return await this.save(nuevoDetalle);
  },

  async obtenerDetallePorPedido(idPedido: number) {
    return await this.find({
      where: { pedido: { idPedido } },
      relations: ["arreglo"],
    });
  },

  async eliminarDetalle(idDetalle: number) {
    await this.delete(idDetalle);
    return true;
  }
});