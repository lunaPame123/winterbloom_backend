import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Rol } from "../../roles/entities/rol.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({ name: "rolusuario"})
export class RolUsuario extends Auditoria {
  @PrimaryGeneratedColumn({ name: "idUsuarioRol" })
  idUsuarioRol!: number;

  @ManyToOne(() => Usuario, usuario => usuario.roles)
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @ManyToOne(() => Rol, rol => rol.usuarios)
  @JoinColumn({ name: "idRol" })
  rol!: Rol;
}
