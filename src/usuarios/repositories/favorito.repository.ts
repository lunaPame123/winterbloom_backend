import { AppDataSource } from "../../database/data-source";
import { Favorito } from "../entities/favorito.entity";

export const FavoritoRepository = AppDataSource.getRepository(Favorito).extend({

    async obtenerTodosLosFavoritos() {
        return await this.find({ 
            relations: ["usuario", "arreglo"],
            order: { idFavorito: "ASC" }
        });
    },

    async obtenerFavoritosPorId(id: number) {
        return await this.findOne({ 
            where: { idFavorito: id },
            relations: ["usuario", "arreglo"]
        });
    },

    async obtenerFavoritosPorUsuario(idUsuario: number) {
        return await this.find({
            where: { usuario: { idUsuario }, estado: true },
            relations: ["usuario", "arreglo"]
        });
    },

    async crearFavorito(data: Partial<Favorito>) {
        const favorito = this.create(data);
        return await this.save(favorito);
    },

    async eliminarFavorito(id: number) {
        await this.update(id, { estado: false });
        return true;
    }
});
