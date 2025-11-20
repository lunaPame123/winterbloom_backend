import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "arreglo"})
export class Arreglo {
  @PrimaryGeneratedColumn()
  idArreglo!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ type: "text" })
  descripcion?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio!: number;

  @Column({ length: 50 })
  categoria?: string;

  @Column({ nullable: true })
  imagen?: string;

  @Column()
  usuarioCreacion?: string;

  @Column({ type: "timestamp" })
  fechaCreacion?: Date;

  @Column({ nullable: true })
  usuarioModificacion?: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion?: Date;

  @Column({ default: true })
  estado?: boolean;
}
