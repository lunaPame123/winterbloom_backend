import { AppDataSource } from "../../database/data-source";
import { Flor } from "../entities/flor.entity";

export const FlorRepository = AppDataSource.getRepository(Flor).extend({
    async obtenerTodasLasFlores() {
        return await this.find({ order: { idFlor: "ASC" } });
    },

    async obtenerFloresPorId(id: number) {
        return await this.findOne({ where: { idFlor: id } });
    },

    async buscarFloresPorColor(color: string) {
        return await this.find({
            where: { color, estado: true },
            order: { nombre: "ASC" }
        });
    },

    async buscarFloresPorNombre(nombre: string) {
        return await this.createQueryBuilder("flor")
            .where("flor.nombre ILIKE :nombre AND flor.estado = true", { nombre: `%${nombre}%` })
        .getMany();
    },

    async obtenerFloresActivos() {
        return await this.find({ where: { estado: true }, order: { nombre: "ASC" } });
    },

    async crearFlor(data: Partial<Flor>) {
        const flor = this.create(data);
        return await this.save(flor);
    },

    async actualizarFlor(id: number, data: Partial<Flor>) {
        await this.update(id, data);
        return await this.obtenerFloresPorId(id);
    },

    async eliminarFlores(id: number) {
        await this.update(id, { estado: false });
        return true;
    }
})