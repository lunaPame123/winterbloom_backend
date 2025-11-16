import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity("PERSONA")
export class Persona {
  @PrimaryGeneratedColumn({ name: "idPersona" })
  idPersona!: number;

  @Column({ unique: true, length: 20 })
  ci!: string;

  @Column({ length: 50 })
  nombre!: string;

  @Column({ length: 50 })
  apellidoPaterno!: string;

  @Column({ length: 50 })
  apellidoMaterno?: string;

  @Column({ length: 50, nullable: true })
  ciudad?: string;

  @Column({ type: "date", nullable: true })
  fechaNacimiento?: string;

  @Column({ length: 10, nullable: true })
  sexo?: string;

  @ManyToOne(() => Usuario, usuario => usuario.persona)
  usuarios!: Usuario[];
}
