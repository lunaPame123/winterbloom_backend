import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Persona } from "../../personas/entities/persona.entity";
import { RolUsuario } from "./rolusuario.entity";
import { Favorito } from "./favorito.entity";
import { Pedido } from "../../pedidos/entities/pedido.entity";

@Entity("USUARIO")
export class Usuario {
  @PrimaryGeneratedColumn({ name: "idUsuario" })
  idUsuario!: number;

  @ManyToOne(() => Persona, persona => persona.usuarios)
  @JoinColumn({ name: "idPersona" })
  persona!: Persona;

  @Column({ unique: true, length: 100 })
  correo!: string;

  @Column()
  contrasena!: string;

  @Column({ length: 50, nullable: true })
  usuarioCreacion?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion?: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion?: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion?: Date;

  @Column({ default: true })
  estado?: boolean;

  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.usuario)
  rolesUsuario!: RolUsuario[];

  @OneToMany(() => Favorito, favorito => favorito.usuario)
  favoritos!: Favorito[];

  @OneToMany(() => Pedido, pedido => pedido.usuario)
  pedidos!: Pedido[];
}
