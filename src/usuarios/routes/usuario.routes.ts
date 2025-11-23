import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const router = Router();

// ----- RUTAS USUARIO -----
router.post("/usuarios", UsuarioController.crearUsuario);
router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:idUsuario", UsuarioController.obtenerUsuario); 
router.put("/usuarios/:idUsuario", UsuarioController.actualizarUsuario);
router.delete("/usuarios/:idUsuario", UsuarioController.eliminarUsuario); 

// ----- RUTAS ROL USUARIO -----
router.post("/usuarios/roles/asignar", UsuarioController.asignarRol);
router.delete("/usuarios/roles/:idUsuarioRol", UsuarioController.eliminarRol);

// ----- RUTAS FAVORITOS -----
router.get("/usuarios/favoritos", UsuarioController.listarFavoritos);
router.get("/usuarios/favoritos/:idFavorito", UsuarioController.obtenerFavorito); 
router.get("/usuarios/:idUsuario/favoritos", UsuarioController.listarFavoritosPorUsuario); 
router.post("/usuarios/favoritos", UsuarioController.crearFavorito); 
router.delete("/usuarios/favoritos/:idFavorito", UsuarioController.eliminarFavorito);

export default router;