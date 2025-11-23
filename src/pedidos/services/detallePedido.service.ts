import { DetallePedidoRepository } from "../repositories/detallePedido.repository";
import { DetallePedido } from "../entities/detallepedido.entity";

export class DetallePedidoService {

  async obtenerPorPedido(idPedido: number): Promise<DetallePedido[]> {
    const detalles = await DetallePedidoRepository.obtenerDetallePorPedido(idPedido);
    return detalles || [];
  }

  async crearDetalle(detalleData: Partial<DetallePedido>): Promise<DetallePedido> {
    if (!detalleData.pedido) throw new Error("Debe especificar el pedido");
    if (!detalleData.arreglo) throw new Error("Debe especificar el arreglo");
    if (!detalleData.precioUnitario || !detalleData.cantidad)
      throw new Error("Precio unitario y cantidad son obligatorios");

    detalleData.subtotal = detalleData.precioUnitario * detalleData.cantidad;

    const detalleCreado = await DetallePedidoRepository.crearDetallePedido(detalleData);
    if (!detalleCreado) throw new Error("Error al crear detalle");
    return detalleCreado;
  }

}
