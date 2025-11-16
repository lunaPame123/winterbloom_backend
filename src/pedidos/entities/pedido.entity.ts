import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { DetallePedido } from "./detallepedido.entity";

@Entity("PEDIDO")
export class Pedido {
  @PrimaryGeneratedColumn({ name: "idPedido" })
  idPedido!: number;

  @ManyToOne(() => Usuario, usuario => usuario.pedidos)
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaPedido!: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ default: true })
  estado!: boolean;

  @Column({ length: 50, nullable: true })
  usuarioCreacion?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion?: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion?: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion?: Date;

  @OneToMany(() => DetallePedido, detalle => detalle.pedido)
  detalles!: DetallePedido[];
}
