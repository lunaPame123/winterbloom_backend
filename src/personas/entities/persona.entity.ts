import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity({ name: "persona" })
export class Persona {
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
}
