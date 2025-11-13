import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ROL")
export class Rol {
  @PrimaryGeneratedColumn({ name: "idRol" })
  idRol!: number;

  @Column({ name: "nombreRol", unique: true, length: 50 })
  nombreRol!: string;

  @Column({ name: "descripcion", type: "varchar", length: 200, nullable: true })
  descripcion?: string;
}
