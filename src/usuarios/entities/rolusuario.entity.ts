import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Rol } from "../../roles/entities/rol.entity";

@Entity("ROLUSUARIO")
export class RolUsuario {
  @PrimaryGeneratedColumn({ name: "idUsuarioRol" })
  idUsuarioRol!: number;

  @ManyToOne(() => Usuario, usuario => usuario.rolesUsuario)
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @ManyToOne(() => Rol, rol => rol.usuariosRol)
  @JoinColumn({ name: "idRol" })
  rol!: Rol;
}
