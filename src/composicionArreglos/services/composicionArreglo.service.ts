import { ComposicionArreglo } from "../entities/composicionArreglo.entity";
import { ComposicionArregloRepository } from "../repositories/composicionArreglo.repository";

export class ComposicionArregloService {

  async obtenerTodos() {
    return await ComposicionArregloRepository.obtenerTodasLasComposiciones();
  }

  async obtenerPorId(id: number) {
    const composicion = await ComposicionArregloRepository.obtenerComposicionesPorId(id);
    if (!composicion) {
      throw new Error("La composición no existe");
    }
    return composicion;
  }

  async obtenerPorArreglo(idArreglo: number) {
    return await ComposicionArregloRepository.obtenerComposicionesPorArreglo(idArreglo);
  }

  async obtenerPorFlor(idFlor: number) {
    return await ComposicionArregloRepository.obtenerComposicionesPorFlor(idFlor);
  }

  async crear(data: Partial<ComposicionArreglo>) {
    if (!data.arreglo) throw new Error("Se debe especificar el arreglo");
    if (!data.flor) throw new Error("Se debe especificar la flor");
    if (!data.cantidad || data.cantidad <= 0) throw new Error("La cantidad debe ser mayor a cero");

    return await ComposicionArregloRepository.crearComposiciones(data);
  }

  async actualizar(id: number, data: Partial<ComposicionArreglo>) {
    await this.obtenerPorId(id);
    return await ComposicionArregloRepository.actualizarComposicion(id, data);
  }

  async eliminacionLogica(id: number) {
    await this.obtenerPorId(id);
    return await ComposicionArregloRepository.eliminarComposicion(id);
  }
}