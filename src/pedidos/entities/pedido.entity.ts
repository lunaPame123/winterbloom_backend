import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { DetallePedido } from "./detallepedido.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({name: "pedido"})
export class Pedido extends Auditoria {
  @PrimaryGeneratedColumn()
  idPedido!: number;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @Column({ type: "timestamp" })
  fechaPedido!: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ type: "varchar", length: 20, default: "pendiente" })
  estados!: "pendiente" | "listo" | "entregado" | "cancelado";

  @OneToMany(() => DetallePedido, detalle => detalle.pedido)
  detalles!: DetallePedido[];
}
