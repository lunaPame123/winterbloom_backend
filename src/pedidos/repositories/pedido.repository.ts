import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../entities/pedido.entity";
import { Persona } from "../../personas/entities/persona.entity";

export const PedidoRepository = AppDataSource.getRepository(Pedido).extend({
    async crearPedido(data: Partial<Pedido>){
        const nuevoPedido = this.create(data);
        return await this.save(nuevoPedido);
    },

    async obtenerPedidos() {
        return await this.find({
        relations: ["persona"],
        });
    },

    async obtenerPedidoPorId(idPedido: number) {
        return await this.findOne({
        where: { idPedido },
        relations: ["persona", "detalles", "detalles.arreglo"],
        });
    },

    async obtenerPedidosPorPersona(idPersona: number) {
        return await this.find({
        where: {
            persona: { idPersona },
        },
        relations: ["persona"],
        });
    },

    async actualizarPedido(idPedido: number, data: Partial<Pedido>) {
        await this.update(idPedido, data);
        return await this.obtenerPedidoPorId(idPedido);
    },

    async eliminarPedido(idPedido: number) {
        await this.update(idPedido, {
        estado: false,
        fechaModificacion: new Date(),
        });
    }
})
