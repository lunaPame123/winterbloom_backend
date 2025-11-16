import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Arreglo } from "../../arreglos/entities/arreglo.entity";

@Entity("DETALLEPEDIDO")
export class DetallePedido {
  @PrimaryGeneratedColumn({ name: "idDetalle" })
  idDetalle!: number;

  @ManyToOne(() => Pedido, pedido => pedido.detalles)
  @JoinColumn({ name: "idPedido" })
  pedido!: Pedido;

  @ManyToOne(() => Arreglo)
  @JoinColumn({ name: "idArreglo" })
  arreglo!: Arreglo;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precioUnitario!: number;

  @Column()
  cantidad!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  subtotal!: number;
}
