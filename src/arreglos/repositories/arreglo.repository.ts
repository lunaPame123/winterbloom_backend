import { AppDataSource } from "../../database/data-source";
import { Arreglo } from "../entities/arreglo.entity";

export const ArregloRepository = AppDataSource.getRepository(Arreglo).extend({
    async obtenerTodosLosArreglos(){
        return await this.find({ order: { idArreglo: "ASC" } });
    },

    async obtenerArregloPorId(idArregloObtenido: number){
        return await this.findOne({ where: { idArreglo: idArregloObtenido } });
    },

    async buscarArregloPorCategoria(categoria: string){
        return await this.find({
            where: { categoria, estado: true},
            order: { nombre: "ASC"}
        });
    },

    async buscarArregloPorNombre(nombre: string){
        return await this.createQueryBuilder("arreglo")
            .where("arreglo.nombre ILIKE: nombre AND arreglo.estado = true", {nombre: `%${nombre}%` })
            .getMany();
    },

    async obtenerArreglosActivos() {
        return await this.find({ where: { estado: true }, order: { nombre: "ASC" } });
    },

    async crearArreglo(data: Partial<Arreglo>) {
        const arreglo = this.create(data);
        return await this.save(arreglo);
    },

    async actualizarArreglo(id: number, data: Partial<Arreglo>) {
        await this.update(id, data);
        return await this.obtenerArregloPorId(id);
    },

    async eliminarArreglo(id: number) {
        await this.update(id, { estado: false });
        return true;
    }
});