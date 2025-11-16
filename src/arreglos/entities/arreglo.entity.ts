import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ARREGLO")
export class Arreglo {
  @PrimaryGeneratedColumn({ name: "idArreglo" })
  idArreglo!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio!: number;

  @Column({ length: 50 })
  categoria?: string;

  @Column({ nullable: true })
  imagen?: string;

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
}
