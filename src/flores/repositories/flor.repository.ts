import { AppDataSource } from "../../database/data-source";
import { Flor } from "../entities/flor.entity";

export const FlorRepository = AppDataSource.getRepository(Flor).extend({

    async obtenerTodasLasFlores() {
        return await this.find({ order: { idFlor: "ASC" } });
    },

    async obtenerFlorPorId(idFlor: number) {
        return await this.findOne({ where: { idFlor } });
    },

    async buscarFloresPorColor(color: string) {
        return await this.find({
            where: { color, estado: true },
            order: { nombreFlor: "ASC" }
        });
    },

    async buscarFloresPorNombre(nombre: string) {
        return await this.createQueryBuilder("flor")
            .where("flor.nombre ILIKE :nombre AND flor.estado = true", { nombre: `%${nombre}%` })
            .getMany();
    },

    async obtenerFloresActivas() {
        return await this.find({ where: { estado: true }, order: { nombreFlor: "ASC" } });
    },

    async crearFlor(data: Partial<Flor>) {
        const nuevaFlor = this.create(data);
        return await this.save(nuevaFlor);
    },

    async actualizarFlor(idFlor: number, data: Partial<Flor>) {
        await this.update(idFlor, data);
        return await this.obtenerFlorPorId(idFlor);
    },

    async eliminarFlor(idFlor: number) {
        await this.update(idFlor, { estado: false });
        return true;
    }
})