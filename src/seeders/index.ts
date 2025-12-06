import { AppDataSource } from "../database/data-source";
import { Seeder } from "typeorm-extension";

// Importa tus seeders
import PersonaSeeder from "./personas.seeder";
import UsuarioSeeder from "./usuarios.seeder";
import RolSeeder from "./roles.seeder";
import RolUsuarioSeeder from "./rolusuario.seeder";
import FlorSeeder from "./flores.seeder";
import ArregloSeeder from "./arreglos.seeder";
import ComposicionSeeder from "./composiciones.seeder";
import PedidoSeeder from "./pedidos.seeder";
import DetallePedidoSeeder from "./detallepedido.seeder";
import FavoritoSeeder from "./favoritos.seeder";

async function runSeeders() {
  await AppDataSource.initialize();
  console.log("📌 Conectado a la base de datos");

  const seeders: Seeder[] = [
    new PersonaSeeder(),
    new UsuarioSeeder(),
    new RolSeeder(),
    new RolUsuarioSeeder(),
    new FlorSeeder(),
    new ArregloSeeder(),
    new ComposicionSeeder(),
    new PedidoSeeder(),
    new DetallePedidoSeeder(),
    new FavoritoSeeder(),
  ];

  for (const seeder of seeders) {
    console.log(`🔽 Ejecutando: ${seeder.constructor.name}`);
    // Pasamos `undefined as any` porque no usamos factories
    await seeder.run(AppDataSource, undefined as any);
  }

  await AppDataSource.destroy();
  console.log("🌱 Seeders ejecutados correctamente");
}

runSeeders().catch((error) => console.error(error));
