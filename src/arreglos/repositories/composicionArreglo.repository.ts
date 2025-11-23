import { AppDataSource } from "../../database/data-source";
import { ComposicionArreglo } from "../entities/composicionArreglo.entity";

export const ComposicionArregloRepository = AppDataSource.getRepository(ComposicionArreglo).extend({
    
    async obtenerTodasLasComposiciones() {
        return await this.find({ 
            relations: ["arreglo", "flor"],
            order: { idComposicion: "ASC" }
        });
    },

    async obtenerComposicionesPorId(id: number) {
        return await this.findOne({ 
            where: { idComposicion: id },
            relations: ["arreglo", "flor"]
        });
    },

    async obtenerComposicionesPorArreglo(idArreglo: number) {
        return await this.find({
            where: { arreglo: { idArreglo }, estado: true },
            relations: ["arreglo", "flor"]
        });
    },

    async obtenerComposicionesPorFlor(idFlor: number) {
        return await this.find({
            where: { flor: { idFlor }, estado: true },
            relations: ["arreglo", "flor"]
        });
    },

    async crearComposiciones(data: Partial<ComposicionArreglo>) {
        const composicion = this.create(data);
        return await this.save(composicion);
    },

    async actualizarComposicion(id: number, data: Partial<ComposicionArreglo>) {
        await this.update(id, data);
        return await this.obtenerComposicionesPorId(id);
    },

    async eliminarComposicion(id: number) {
        await this.update(id, { estado: false });
        return true;
    }

});