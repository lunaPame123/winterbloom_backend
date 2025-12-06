import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Persona } from "../../personas/entities/persona.entity";
import { RolUsuario } from "./rolusuario.entity"; 
import { Favorito } from "./favorito.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({ name: "usuario" })
export class Usuario extends Auditoria {
  @PrimaryGeneratedColumn()
  idUsuario!: number;

  @OneToOne(() => Persona, { eager: true})
  @JoinColumn({ name: "idPersona"})
  persona!: Persona;

  @Column({ unique: true})
  correo!: string;

  @Column()
  contrasena!: string;

  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.usuario)
  roles!: RolUsuario[];

  @OneToMany(()=> Favorito, favorito => favorito.usuario)
  favoritos?: Favorito[];
}


