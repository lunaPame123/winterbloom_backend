import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({ name: "persona" })
export class Persona extends Auditoria {
  @PrimaryGeneratedColumn()
  idPersona!: number;

  @Column({ unique: true, length: 20 })
  ci!: string;

  @Column({ length: 50 })
  nombre!: string;

  @Column({ length: 50 })
  apellidoPaterno!: string;

  @Column({ length: 50, nullable: true })
  apellidoMaterno?: string;

  @Column({ length: 50 })
  ciudad!: string;

  @Column({ type: "date"})
  fechaNacimiento!: Date;

  @Column({ length: 10 })
  sexo!: string;

  @OneToOne(() => Usuario, usuario => usuario.persona)
  @JoinColumn({ name: "idUsuario"})
  usuario!: Usuario;
  apellido: any;
  telefono: any;
}
