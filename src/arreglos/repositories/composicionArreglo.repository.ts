import { AppDataSource } from "../../database/data-source";
import { ComposicionArreglo } from "../entities/composicionArreglo.entity";

export const ComposicionArregloRepository = AppDataSource.getRepository(ComposicionArreglo).extend({
    
    async obtenerTodasLasComposiciones() {
        return await this.find({ 
            relations: ["arreglo", "flor"],
            order: { idComposicion: "ASC" }
        });
    },

    async obtenerComposicionesPorId(idComposicion: number) {
        return await this.findOne({ 
            where: { idComposicion },
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

    async crearComposicion(data: Partial<ComposicionArreglo>) {
        const nuevaComposicion = this.create(data);
        return await this.save(nuevaComposicion);
    },

    async actualizarComposicion(idComposicion: number, data: Partial<ComposicionArreglo>) {
        await this.update(idComposicion, data);
        return await this.obtenerComposicionesPorId(idComposicion);
    },

    async eliminarComposicion(idComposicion: number) {
        await this.update(idComposicion, { estado: false });
        return true;
    }

});