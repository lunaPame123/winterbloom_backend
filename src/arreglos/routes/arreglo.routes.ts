import { Router } from "express";
import { ArregloController } from "../controllers/arreglo.controller";
import { CrearArregloDto } from "../dtos/crearArreglo.dto";
import { ActualizarArregloDto } from "../dtos/actualizarArreglo.dto";
import { validarEntidad } from "../../middlewares/validarEntidad";

const router = Router();

// Rutas para Arreglos
router.get("/", ArregloController.obtenerTodosArreglos);
router.get("/categoria/:categoria", ArregloController.buscarArreglosPorCategoria);
router.get("/nombre/:nombre", ArregloController.buscarArreglosPorNombre);
router.post("/", validarEntidad(CrearArregloDto), ArregloController.crearArreglo);
router.put("/:id", validarEntidad(ActualizarArregloDto), ArregloController.actualizarArreglo);
router.delete("/:id", ArregloController.eliminarArreglo);

// Rutas para Composiciones de Arreglos
router.get("/:idArreglo/composiciones", ArregloController.obtenerComposicionesPorArreglo);
router.get("/composicion/:idFlor", ArregloController.obtenerComposicionesPorFlor);
router.get("/composicion/id/:idComposicion", ArregloController.obtenerComposicionPorId);
router.post("/composicion", ArregloController.crearComposicion);
router.put("/composicion/:id", ArregloController.actualizarComposicion);
router.delete("/composicion/:id", ArregloController.eliminarComposicion);


export default router;