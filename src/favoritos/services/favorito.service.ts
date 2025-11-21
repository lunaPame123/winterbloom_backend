import { FavoritoRepository } from "../repositories/favorito.repository";
import { Favorito } from "../entities/favorito.entity";

export class FavoritoService {

  async obtenerTodos() {
    return await FavoritoRepository.obtenerTodosLosFavoritos();
  }

  async obtenerPorId(id: number) {
    const favorito = await FavoritoRepository.obtenerFavoritosPorId(id);
    if (!favorito) {
      throw new Error("El favorito no existe");
    }
    return favorito;
  }

  async obtenerPorUsuario(idUsuario: number) {
    return await FavoritoRepository.obtenerFavoritosPorUsuario(idUsuario);
  }

  async crear(data: Partial<Favorito>) {
    if (!data.usuario) throw new Error("Se debe especificar el usuario");
    if (!data.arreglo) throw new Error("Se debe especificar el arreglo");

    return await FavoritoRepository.crearFavorito(data);
  }

  async eliminacionLogica(id: number) {
    await this.obtenerPorId(id);
    return await FavoritoRepository.eliminarFavorito(id);
  }
}