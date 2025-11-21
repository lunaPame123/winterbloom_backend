import { FlorRepository } from "../repositories/flor.repository";
import { Flor } from "../entities/flor.entity";

export class FlorService {

  async obtenerTodos() {
    return await FlorRepository.obtenerTodasLasFlores();
  }

  async obtenerActivos() {
    return await FlorRepository.obtenerFloresActivos();
  }

  async obtenerPorId(id: number) {
    const flor = await FlorRepository.obtenerFloresPorId(id);
    if (!flor) {
      throw new Error("La flor no existe");
    }
    return flor;
  }

  async buscarPorColor(color: string) {
    return await FlorRepository.buscarFloresPorColor(color);
  }

  async buscarPorNombre(nombre: string) {
    return await FlorRepository.buscarFloresPorNombre(nombre);
  }

  async crear(data: Partial<Flor>) {
    if (!data.nombre) throw new Error("El nombre de la flor es obligatorio");
    if (!data.precio || data.precio <= 0) throw new Error("El precio debe ser mayor a cero");
    if (!data.color) throw new Error("El color es obligatorio");

    return await FlorRepository.crearFlor(data);
  }

  async actualizar(id: number, data: Partial<Flor>) {
    await this.obtenerPorId(id);
    return await FlorRepository.actualizarFlor(id, data);
  }

  async eliminacionLogica(id: number) {
    await this.obtenerPorId(id);
    return await FlorRepository.eliminarFlores(id);
  }
}