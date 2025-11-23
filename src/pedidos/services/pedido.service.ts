import { PedidoRepository } from "../repositories/pedido.repository";
import { DetallePedidoRepository } from "../repositories/detallePedido.repository"; 
import { Pedido } from "../entities/pedido.entity";
import { DetallePedido } from "../entities/detallepedido.entity";

export class PedidoService {

    async crearPedidoConDetalles(
        pedidoData: Partial<Pedido>,
        detallesData: Partial<DetallePedido>[]
    ): Promise<Pedido> {

        const nuevoPedido = await PedidoRepository.crearPedido(pedidoData);

        const detalles = detallesData.map(d => ({
        ...d,
        pedido: nuevoPedido,
        subtotal: d.precioUnitario! * d.cantidad!
        }));

        await DetallePedidoRepository.crearVariosDetalles(detalles);

        const total = detalles.reduce((sum, d) => sum + d.subtotal!, 0);
        await PedidoRepository.actualizarPedido(nuevoPedido.idPedido, { total });

        const pedidoFinal = await PedidoRepository.obtenerPedidoPorId(nuevoPedido.idPedido);
        if (!pedidoFinal) throw new Error("Error al obtener el pedido creado");

        return pedidoFinal;
    }

    async obtenerTodos(): Promise<Pedido[]> {
        return await PedidoRepository.obtenerPedidos();
    }

    async obtenerPorId(idPedido: number): Promise<Pedido> {
        const pedido = await PedidoRepository.obtenerPedidoPorId(idPedido);
        if (!pedido) throw new Error("Pedido no encontrado");
        return pedido;
    }

    async eliminar(idPedido: number) {
        const pedido = await PedidoRepository.obtenerPedidoPorId(idPedido);
        if (!pedido) throw new Error("Pedido no encontrado");
        await PedidoRepository.eliminarPedido(idPedido);
        return { mensaje: "Pedido eliminado (lógico) correctamente" };
    }
}