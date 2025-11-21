import { ArregloRepository } from "../repositories/arreglo.repository";
import { Arreglo } from "../entities/arreglo.entity";

export class ArregloService {
    async obtenerTodos() {
        return await ArregloRepository.obtenerTodosLosArreglos();
    }

    async obtenerPorId(id: number) {
        const arreglo = await ArregloRepository.obtenerArregloPorId(id);
        if (!arreglo) {
            throw new Error("Arreglo no encontrado");
        }
        return arreglo;
    }

    async buscarPorCategoria(categoria: string) {
        return await ArregloRepository.buscarArregloPorCategoria(categoria);
    }

    async buscarPorNombre(nombre: string) {
        return await ArregloRepository.buscarArregloPorNombre(nombre);
    }

    async obtenerActivos() {
        return await ArregloRepository.obtenerArreglosActivos();
    }

    async crear(data: Partial<Arreglo>) {
        if (!data.nombre) throw new Error("El nombre del arreglo es obligatorio");
        if (!data.precio || data.precio <= 0) throw new Error("El precio debe ser mayor a cero");

        return await ArregloRepository.crearArreglo(data);
    }

    async actualizar(id: number, data: Partial<Arreglo>) {
        await this.obtenerPorId(id);
        return await ArregloRepository.actualizarArreglo(id, data);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id); 
        return await ArregloRepository.eliminarArreglo(id);
    }
}