import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Arreglo } from "../../arreglos/entities/arreglo.entity";

@Entity("FAVORITO")
export class Favorito {
  @PrimaryGeneratedColumn({ name: "idFavorito" })
  idFavorito!: number;

  @ManyToOne(() => Usuario, usuario => usuario.favoritos)
  @JoinColumn({ name: "idUsuario" })
  usuario!: Usuario;

  @ManyToOne(() => Arreglo)
  @JoinColumn({ name: "idArreglo" })
  arreglo!: Arreglo;

  @Column({ length: 50, nullable: true })
  usuarioCreacion?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion?: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion?: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion?: Date;

  @Column({ default: true })
  estado?: boolean;
}
