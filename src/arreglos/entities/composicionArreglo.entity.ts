import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Arreglo } from "./arreglo.entity";
import { Flor } from "../../flores/entities/flor.entity";
import { Auditoria } from "../../auditoria/auditoria.entity";


@Entity({name: "composicion_arreglo"})
export class ComposicionArreglo extends Auditoria {
    @PrimaryGeneratedColumn()
    idComposicion!: number;

    @ManyToOne(() => Arreglo, arreglo => arreglo.composiciones, { nullable: false })
    @JoinColumn({ name: "idArreglo" })
    arreglo!: Arreglo;

    @ManyToOne(() => Flor, { nullable: false })
    @JoinColumn({ name: "idFlor" })
    flor!: Flor;

    @Column({ type: "int", default: 1 })
    cantidad!: number;
}