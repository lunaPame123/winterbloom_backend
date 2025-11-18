import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Pedido } from "../../pedidos/entities/pedido.entity";

@Entity({ name: "persona" })
export class Persona {
  @PrimaryGeneratedColumn()
  idPersona!: number;

  @Column({ unique: true, length: 20 })
  ci!: string;

  @Column({ length: 50 })
  nombre!: string;

  @Column({ length: 50 })
  apellidoPaterno!: string;

  @Column({ length: 50 })
  apellidoMaterno?: string;

  @Column({ length: 50, nullable: true })
  ciudad?: string;

  @Column({ type: "date", nullable: true })
  fechaNacimiento?: string;

  @Column({ length: 10, nullable: true })
  sexo?: string;

  @OneToOne(() => Usuario, usuario => usuario.persona)
  usuarios!: Usuario[];

  @OneToMany(() => Pedido, pedido => pedido.persona)
  pedidos!: Pedido [];
}
