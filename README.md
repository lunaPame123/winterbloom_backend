### Backend - Florería Winter Bloom

El **backend** de Florería Winter Bloom está desarrollado con **Node.js y Express**, y se encarga de gestionar toda la lógica de negocio, el acceso a la base de datos y la autenticación de usuarios para el sistema de ventas y administración de la florería. Permite manejar **usuarios**, **flores**, **arreglos**, **ventas** y **favoritos**, implementando **CRUD completo** y protección de rutas mediante **JWT**.

**Tecnologías y librerías utilizadas:**

* **Node.js**: Entorno de ejecución de JavaScript en el servidor.
* **Express**: Framework para crear APIs REST de manera rápida y sencilla.
* **TypeORM**: ORM para conectarse y manipular la base de datos (PostgreSQL/MySQL).
* **JWT (jsonwebtoken)**: Para autenticación y autorización de usuarios.
* **Bcrypt**: Para encriptar y verificar contraseñas de usuarios.
* **dotenv**: Para manejar variables de entorno.
* **cors**: Para habilitar solicitudes desde el frontend.

**Funcionalidades principales:**

* Registro e inicio de sesión de administradores con encriptación de contraseñas y tokens JWT.
* Gestión de flores y arreglos (crear, listar, actualizar, eliminar).
* Registro de ventas y control de favoritos.
* Rutas protegidas con middleware de autenticación y manejo centralizado de errores.

---

**NOTA:** En este proyecto se desarrollaron por separado el frontend (React + TypeScript) y el backend (Node.js + Express + TypeORM). Sin embargo, no se logro completar la conexión entre ambos, por lo que la aplicación web no realiza solicitudes a la API ni interactúa con la base de datos. El proyecto está estructurado de manera que la integración futura sea directa y sencilla cuando se decida conectar frontend y backend.
