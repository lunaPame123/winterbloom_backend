import { IsNumber, IsOptional, Min } from "class-validator";

export class ActualizarComposicionDto {
  @IsOptional()
  @IsNumber()
  idArreglo?: number;

  @IsOptional()
  @IsNumber()
  idFlor?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  cantidad?: number;

  @IsOptional()
  usuarioModificacion?: string;
}
