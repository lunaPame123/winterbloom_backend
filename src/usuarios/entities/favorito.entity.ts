import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Arreglo } from "../../arreglos/entities/arreglo.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({name: "favorito"})
export class Favorito extends Auditoria{
    @PrimaryGeneratedColumn()
    idFavorito!: number;

    @ManyToOne(() => Usuario, { nullable: false })
    @JoinColumn({ name: "idUsuario" })
    usuario!: Usuario;

    @ManyToOne(() => Arreglo, { nullable: false })
    @JoinColumn({ name: "idArreglo" })
    arreglo!: Arreglo;
}