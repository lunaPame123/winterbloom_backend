import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Persona } from "../../personas/entities/persona.entity";
import { RolUsuario } from "./rolusuario.entity"; 
import { Favorito } from "./favorito.entity";

@Entity({ name: "usuario" })
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario!: number;

  @OneToOne(() => Persona, { eager: true})
  @JoinColumn({ name: "idPersona"})
  persona!: Persona;

  @Column({ unique: true})
  correo!: string;

  @Column()
  contrasena!: string;

  @Column({ length: 50, nullable: true })
  usuarioCreacion?: string;

  @Column({ nullable: true })
  fechaCreacion?: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion?: string;

  @Column({ nullable: true })
  fechaModificacion?: Date;

  @Column({ default: true })
  estado?: boolean;

  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.usuario)
  roles!: RolUsuario[];

  @OneToMany(()=> Favorito, favorito => favorito.usuario)
  favoritos?: Favorito[];
}


