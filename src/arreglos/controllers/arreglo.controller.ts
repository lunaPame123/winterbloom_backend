import { Request, Response } from "express";
import { ArregloService } from "../services/arreglo.service";
import { ComposicionArregloService } from "../services/composicionArreglo.service";

const arregloService = new ArregloService();
const composicionService = new ComposicionArregloService();

export class ArregloController {
  // ---------------- ARREGLOS ----------------
  static async obtenerTodosArreglos(req: Request, res: Response) {
    try {
      const arreglos = await arregloService.obtenerTodos();
      return res.json(arreglos);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async obtenerArregloPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.idArreglo);
      const arreglo = await arregloService.obtenerPorId(id);
      return res.json(arreglo);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  static async buscarArreglosPorCategoria(req: Request, res: Response) {
    try {
      const categoria = req.params.categoria;
      const arreglos = await arregloService.buscarPorCategoria(categoria);
      return res.json(arreglos);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async buscarArreglosPorNombre(req: Request, res: Response) {
    try {
      const nombre = req.params.nombre;
      const arreglos = await arregloService.buscarPorNombre(nombre);
      return res.json(arreglos);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async crearArreglo(req: Request, res: Response) {
    try {
      const nuevoArreglo = await arregloService.crear(req.body);
      return res.status(201).json(nuevoArreglo);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async actualizarArreglo(req: Request, res: Response) {
    try {
      const id = Number(req.params.idArreglo);
      const arregloActualizado = await arregloService.actualizar(id, req.body);
      return res.json(arregloActualizado);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async eliminarArreglo(req: Request, res: Response) {
    try {
      const id = Number(req.params.idArreglo);
      await arregloService.eliminar(id);
      return res.json({ mensaje: "Arreglo eliminado (lógicamente)" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  // -------------- COMPOSICIONES ----------------

  static async obtenerTodasComposiciones(req: Request, res: Response) {
    try {
      const composiciones = await composicionService.obtenerTodos();
      return res.json(composiciones);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async obtenerComposicionPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.idComposicion);
      const composicion = await composicionService.obtenerPorId(id);
      return res.json(composicion);
    } catch (error: any) {
      return res.status(404).json({ mensaje: error.message });
    }
  }

  static async obtenerComposicionesPorArreglo(req: Request, res: Response) {
    try {
      const idArreglo = Number(req.params.idArreglo);
      const composiciones = await composicionService.obtenerPorArreglo(idArreglo);
      return res.json(composiciones);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async obtenerComposicionesPorFlor(req: Request, res: Response) {
    try {
      const idFlor = Number(req.params.idFlor);
      const composiciones = await composicionService.obtenerPorFlor(idFlor);
      return res.json(composiciones);
    } catch (error: any) {
      return res.status(500).json({ mensaje: error.message });
    }
  }

  static async crearComposicion(req: Request, res: Response) {
    try {
      const nuevaComposicion = await composicionService.crear(req.body);
      return res.status(201).json(nuevaComposicion);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async actualizarComposicion(req: Request, res: Response) {
    try {
      const id = Number(req.params.idComposicion);
      const composicionActualizada = await composicionService.actualizar(id, req.body);
      return res.json(composicionActualizada);
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }

  static async eliminarComposicion(req: Request, res: Response) {
    try {
      const id = Number(req.params.idComposicion);
      await composicionService.eliminacionLogica(id);
      return res.json({ mensaje: "Composición eliminada (lógicamente)" });
    } catch (error: any) {
      return res.status(400).json({ mensaje: error.message });
    }
  }
}
