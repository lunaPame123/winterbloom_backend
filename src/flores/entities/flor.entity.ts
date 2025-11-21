import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "flor"})
export class Flor {
    @PrimaryGeneratedColumn()
    idFlor!: number;

    @Column({length: 100})
    nombre!: string;

    @Column({ length: 50 })
    color!: string;

    @Column({ type: 'text' })
    significado?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio!: number;

    @Column({ nullable: true })
    imagen!: string;

    @Column()
    usuarioCreacion!: string;

    @Column({ type: 'timestamp' })
    fechaCreacion!: Date;

    @Column({ nullable: true })
    usuarioModificacion!: string;

    @Column({ type: 'timestamp', nullable: true })
    fechaModificacion!: Date;

    @Column({ default: true })
    estado!: boolean;
}