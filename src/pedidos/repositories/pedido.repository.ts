import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../entities/pedido.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

export const PedidoRepository = AppDataSource.getRepository(Pedido).extend({
    async crearPedido(data: Partial<Pedido>){
        const nuevoPedido = this.create(data);
        return await this.save(nuevoPedido);
    },

    async listarPedidos() {
        return await this.find({
            relations: ["usuario", "detalles", "detalles.arreglo"],
            order: { fechaCreacion: "DESC" },
        });
    },

    async obtenerPedidoPorId(idPedido: number) {
        return await this.findOne({
        where: { idPedido },
        relations: ["usuario", "detalles", "detalles.arreglo"],
        });
    },

    async obtenerPedidosPorUsuario(idUsuario: number) {
        return await this.find({
            where: { usuario: { idUsuario } },
            relations: ["usuario", "detalles", "detalles.arreglo"],
            order: { fechaCreacion: "DESC" },
        });
    },

    async actualizarPedido(idPedido: number, data: Partial<Pedido>) {
        await this.update(idPedido, data);
        return await this.obtenerPedidoPorId(idPedido);
    },

    async cambiarEstado (idPedido: number, nuevoEstado: "pendiente" | "listo" | "entregado" | "cancelado") {
        await this.update(idPedido, { estado: nuevoEstado, fechaModificacion: new Date() });
        return await this.obtenerPedidoPorId(idPedido);
    }
})
