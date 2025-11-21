import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Persona } from "../../personas/entities/persona.entity";
import { DetallePedido } from "../../detallePedidos/entities/detallepedido.entity"; 

@Entity({name: "pedido"})
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido!: number;

  @ManyToOne(() => Persona, { nullable: false })
  @JoinColumn({ name: "idPersona" })
  persona!: Persona;

  @Column({ type: "timestamp" })
  fechaPedido!: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ default: true })
  estado!: boolean;

  @Column({ length: 50, nullable: true })
  usuarioCreacion!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion!: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion!: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion!: Date;

  @OneToMany(() => DetallePedido, detalle => detalle.pedido)
  detalles!: DetallePedido[];
}
