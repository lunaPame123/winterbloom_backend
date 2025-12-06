import { IsNumber } from "class-validator";

export class AsignarRolDto {
  @IsNumber()
  idUsuario!: number;

  @IsNumber()
  idRol!: number;
}
