import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Arreglo } from "../../arreglos/entities/arreglo.entity";

@Entity({name: "favorito"})
export class Favorito {
    @PrimaryGeneratedColumn()
    idFavorito!: number;

    @ManyToOne(() => Usuario, { nullable: false })
    @JoinColumn({ name: "idUsuario" })
    usuario!: Usuario;

    @ManyToOne(() => Arreglo, { nullable: false })
    @JoinColumn({ name: "idArreglo" })
    arreglo!: Arreglo;

    @Column()
    usuarioCreacion!: string;

    @Column({ type: "timestamp" })
    fechaCreacion!: Date;

    @Column({ nullable: true })
    usuarioModificacion!: string;

    @Column({ type: "timestamp", nullable: true })
    fechaModificacion!: Date;

    @Column({ default: true })
    estado!: boolean;
}