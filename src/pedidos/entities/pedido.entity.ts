import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { DetallePedido } from "./detallepedido.entity";

@Entity({name: "pedido"})
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido!: number;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @Column({ type: "timestamp" })
  fechaPedido!: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ length: 50, nullable: true })
  usuarioCreacion?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion!: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion?: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion?: Date;

  @Column({ type: "varchar", length: 20, default: "pendiente" })
  estado!: "pendiente" | "listo" | "entregado" | "cancelado";

  @OneToMany(() => DetallePedido, detalle => detalle.pedido)
  detalles!: DetallePedido[];
}
