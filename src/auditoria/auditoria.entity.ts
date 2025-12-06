import { Column } from "typeorm";

export enum Estado {
  ACTIVO = "activo",
  INACTIVO = "inactivo",
  PENDIENTE = "pendiente",
}

export abstract class Auditoria {
  @Column({ length: 50, nullable: true })
  usuarioCreacion!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion!: Date;

  @Column({ length: 50, nullable: true })
  usuarioModificacion!: string;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion!: Date;

  @Column({
    type: "enum",
    enum: Estado,
    default: Estado.ACTIVO
  })
  estado!: Estado;
}
