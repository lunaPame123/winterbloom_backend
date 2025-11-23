import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ComposicionArreglo } from "./composicionArreglo.entity";

@Entity({ name: "arreglo"})
export class Arreglo {
  @PrimaryGeneratedColumn()
  idArreglo!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio!: number;

  @Column({ length: 50, nullable: true })
  categoria?: string;

  @Column({ nullable: true })
  imagen?: string;

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

  @OneToMany(() => ComposicionArreglo, composicion => composicion.arreglo)
  composiciones?: ComposicionArreglo[];
}
