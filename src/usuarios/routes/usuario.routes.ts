import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { validarEntidad } from "../../middlewares/validarEntidad";
import { CrearUsuarioDto } from "../dtos/crearUsuario.dto";
import { ActualizarUsuarioDto } from "../dtos/actualizarUsuario.dto";
import { AsignarRolDto } from "../dtos/asignarRol.dto";
import { CrearFavoritoDto } from "../dtos/crearFavorito.dto";

const router = Router();

// ----- RUTAS USUARIO -----
router.post("/", validarEntidad(CrearUsuarioDto), UsuarioController.crearUsuario);
router.get("/", UsuarioController.listarUsuarios);
router.get("/:idUsuario", UsuarioController.obtenerUsuario);
router.put("/:idUsuario", validarEntidad(ActualizarUsuarioDto), UsuarioController.actualizarUsuario);
router.delete("/:idUsuario", UsuarioController.eliminarUsuario);

// ----- RUTAS ROL USUARIO -----
router.post("/usuarios/roles/asignar",  validarEntidad(AsignarRolDto), UsuarioController.asignarRol);
router.delete("/usuarios/roles/:idUsuarioRol", UsuarioController.eliminarRol);

// ----- RUTAS FAVORITOS -----
router.get("/usuarios/favoritos", UsuarioController.listarFavoritos);
router.get("/usuarios/favoritos/:idFavorito", UsuarioController.obtenerFavorito);
router.get("/usuarios/:idUsuario/favoritos", UsuarioController.listarFavoritosPorUsuario);
router.post("/usuarios/favoritos", validarEntidad(CrearFavoritoDto), UsuarioController.crearFavorito);
router.delete("/usuarios/favoritos/:idFavorito", UsuarioController.eliminarFavorito);

export default router;
