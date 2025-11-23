import { AppDataSource } from "../../database/data-source";
import { Arreglo } from "../entities/arreglo.entity";

export const ArregloRepository = AppDataSource.getRepository(Arreglo).extend({
    async obtenerTodosLosArreglos(){
        return await this.find({ order: { idArreglo: "ASC" } });
    },

    async obtenerArregloPorId(idArreglo: number){
        return await this.findOne({ where: { idArreglo } });
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
        const nuevoArreglo = this.create(data);
        return await this.save(nuevoArreglo);
    },

    async actualizarArreglo(idArreglo: number, data: Partial<Arreglo>) {
        await this.update(idArreglo, data);
        return await this.obtenerArregloPorId(idArreglo);
    },

    async eliminarArreglo(idArreglo: number) {
        await this.update(idArreglo, { estado: false });
        return true;
    }
});