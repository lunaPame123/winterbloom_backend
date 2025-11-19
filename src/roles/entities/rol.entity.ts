import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RolUsuario } from "../../usuarios/entities/rolusuario.entity";

@Entity({ name: "rol" })
export class Rol {
  @PrimaryGeneratedColumn()
  idRol!: number;

  @Column({ unique: true, length: 50 })
  nombreRol!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  descripcion?: string;

  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.rol)
  usuarios!: RolUsuario[];
}
