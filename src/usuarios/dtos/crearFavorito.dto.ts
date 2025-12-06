import { IsNumber } from "class-validator";

export class CrearFavoritoDto {
  @IsNumber()
  idUsuario!: number;

  @IsNumber()
  idArreglo!: number;
}
