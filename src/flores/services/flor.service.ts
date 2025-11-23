import { FlorRepository } from "../repositories/flor.repository";
import { Flor } from "../entities/flor.entity";

export class FlorService {

  async obtenerTodas() {
    return await FlorRepository.obtenerTodasLasFlores();
  }

  async obtenerActivas() {
    return await FlorRepository.obtenerFloresActivas();
  }

  async obtenerPorId(idFlor: number) {
    const flor = await FlorRepository.obtenerFlorPorId(idFlor);
    if (!flor) {
      throw new Error("La flor no existe");
    }
    return flor;
  }

  async buscarPorColor(color: string) {
    return await FlorRepository.buscarFloresPorColor(color);
  }

  async buscarPorNombre(nombreFlor: string) {
    return await FlorRepository.buscarFloresPorNombre(nombreFlor);
  }

  async crear(datosFlor: Partial<Flor>) {
    if (!datosFlor.nombreFlor) throw new Error("El nombre de la flor es obligatorio");
    if (!datosFlor.precio || datosFlor.precio <= 0) throw new Error("El precio debe ser mayor a cero");
    if (!datosFlor.color) throw new Error("El color es obligatorio");

    return await FlorRepository.crearFlor(datosFlor);
  }

  async actualizar(idFlor: number, datosFlor: Partial<Flor>) {
    await this.obtenerPorId(idFlor);
    return await FlorRepository.actualizarFlor(idFlor, datosFlor);
  }

  async eliminacionLogica(idFlor: number) {
    await this.obtenerPorId(idFlor);
    return await FlorRepository.eliminarFlor(idFlor);
  }
}