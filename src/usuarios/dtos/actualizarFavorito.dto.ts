import { IsNumber, Min, IsOptional } from "class-validator";

export class ActualizarFavoritoDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  idUsuario?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  idArreglo?: number;

  @IsOptional()
  usuarioModificacion?: string;
}
