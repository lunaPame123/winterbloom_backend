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

    return await ComposicionArregloRepository.crearComposicion(data);
  }

  async actualizar(idComposicion: number, data: Partial<ComposicionArreglo>) {
    await this.obtenerPorId(idComposicion);
    return await ComposicionArregloRepository.actualizarComposicion(idComposicion, data);
  }

  async eliminacionLogica(idComposicion: number) {
    await this.obtenerPorId(idComposicion);
    return await ComposicionArregloRepository.eliminarComposicion(idComposicion);
  }
}