import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RolUsuario } from "../../usuarios/entities/rolusuario.entity";

@Entity("ROL")
export class Rol {
  @PrimaryGeneratedColumn({ name: "idRol" })
  idRol!: number;

  @Column({ unique: true, length: 50 })
  nombreRol!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  descripcion?: string;

  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.rol)
  usuariosRol!: RolUsuario[];
}
