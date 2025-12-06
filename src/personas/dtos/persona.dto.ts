import { IsString, MaxLength, IsOptional } from "class-validator";

export class CrearPersonaDto {
  @IsString()
  @MaxLength(100)
  nombre!: string;

  @IsString()
  @MaxLength(100)
  apellido!: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}
