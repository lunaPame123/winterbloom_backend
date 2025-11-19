import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Rol } from "./rol.entity";

@Entity({ name: "rolusuario"})
export class RolUsuario {
    @PrimaryGeneratedColumn()
    idUsuarioRol!: number;

    @ManyToOne(() => Usuario, usuario => usuario.roles)
    @JoinColumn({ name: "idUsuario" })
    usuario!: Usuario;

    @ManyToOne(() => Rol, rol => rol.usuarios)
    @JoinColumn({ name: "idRol" })
    rol!: Rol;
}