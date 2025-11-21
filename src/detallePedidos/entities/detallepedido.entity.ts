import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Pedido } from "../../pedidos/entities/pedido.entity"; 
import { Arreglo } from "../../arreglos/entities/arreglo.entity";

@Entity({name: "Detalle_Pedido"})
export class DetallePedido {
  @PrimaryGeneratedColumn()
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
