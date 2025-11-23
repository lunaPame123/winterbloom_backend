import { FavoritoRepository } from "../repositories/favorito.repository";
import { Favorito } from "../entities/favorito.entity";

export class FavoritoService {

  async listarTodosFavoritos() {
    return await FavoritoRepository.listarTodosLosFavoritos();
  }

  async obtenerFavoritoPorId(idFavorito: number) {
    const favorito = await FavoritoRepository.obtenerFavoritoPorId(idFavorito);
    if (!favorito) {
      throw new Error("El favorito con este ID no existe");
    }
    return favorito;
  }

  async listarFavoritosPorUsuario(idUsuario: number) {
    return await FavoritoRepository.listarFavoritosPorUsuario(idUsuario);
  }

  async crearFavorito(data: Partial<Favorito>) {
    if (!data.usuario) throw new Error("Se debe especificar el usuario");
    if (!data.arreglo) throw new Error("Se debe especificar el arreglo");

    return await FavoritoRepository.crearFavorito(data);
  }

  async eliminarFavorito(idFavorito: number) {
    await this.obtenerFavoritoPorId(idFavorito);
    return await FavoritoRepository.eliminarFavorito(idFavorito);
  }
}