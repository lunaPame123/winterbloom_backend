import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Arreglo } from "../../arreglos/entities/arreglo.entity";
import { Flor } from "../../flores/entities/flor.entity";


@Entity({name: "composicion_arreglo"})
export class ComposicionArreglo {
    @PrimaryGeneratedColumn()
    idComposicion!: number;

    @ManyToOne(() => Arreglo, { nullable: false })
    @JoinColumn({ name: "idArreglo" })
    arreglo!: Arreglo;

    @ManyToOne(() => Flor, { nullable: false })
    @JoinColumn({ name: "idFlor" })
    flor!: Flor;

    @Column({ type: "int", default: 1 })
    cantidad!: number;

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