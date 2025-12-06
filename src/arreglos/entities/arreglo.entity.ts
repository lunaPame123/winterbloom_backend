import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ComposicionArreglo } from "./composicionArreglo.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({ name: "arreglo"})
export class Arreglo extends Auditoria {
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

  @OneToMany(() => ComposicionArreglo, composicion => composicion.arreglo)
  composiciones?: ComposicionArreglo[];
}
