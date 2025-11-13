import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Rol } from "../../roles/entities/rol.entity";
import * as bcrypt from "bcryptjs";

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

  @Column({ unique: true, length: 100 })
  correo!: string;

  @Column()
  contraseña!: string;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: "idRol" })
  rol!: Rol;

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

  // Método para encriptar contraseña
  setPassword(password: string) {
    this.contraseña = bcrypt.hashSync(password, 10);
  }

  // Método para comparar contraseña
  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.contraseña);
  }
}
