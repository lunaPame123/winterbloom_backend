import { IsNumber, IsOptional, Min } from "class-validator";

export class CrearComposicionDto {
  @IsNumber()
  idArreglo!: number;

  @IsNumber()
  idFlor!: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  cantidad?: number;

  @IsOptional()
  usuarioCreacion?: string;
}
