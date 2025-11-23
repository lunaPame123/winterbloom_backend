import { AppDataSource } from "../../database/data-source";
import { Favorito } from "../entities/favorito.entity";

export const FavoritoRepository = AppDataSource.getRepository(Favorito).extend({

    async listarTodosLosFavoritos() {
        return await this.find({ 
            relations: ["usuario", "arreglo"],
            order: { idFavorito: "ASC" }
        });
    },

    async obtenerFavoritoPorId(idFavorito: number) {
        return await this.findOne({ 
            where: { idFavorito },
            relations: ["usuario", "arreglo"]
        });
    },

    async listarFavoritosPorUsuario(idUsuario: number) {
        return await this.find({
            where: { usuario: { idUsuario }, estado: true },
            relations: ["usuario", "arreglo"]
        });
    },

    async crearFavorito(data: Partial<Favorito>) {
        const nuevoFavorito = this.create(data);
        return await this.save(nuevoFavorito);
    },

    async eliminarFavorito(idFavorito: number) {
        await this.update(idFavorito, { estado: false });
        return true;
    }
});
