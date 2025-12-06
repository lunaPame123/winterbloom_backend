import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditoria } from "../../auditoria/auditoria.entity";

@Entity({ name: "flor"})
export class Flor extends Auditoria{
    @PrimaryGeneratedColumn()
    idFlor!: number;

    @Column({length: 100})
    nombreFlor!: string;

    @Column({ length: 50 })
    color!: string;

    @Column({ type: 'text', nullable: true })
    significado?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio!: number;

    @Column({ nullable: true })
    imagen?: string;
}