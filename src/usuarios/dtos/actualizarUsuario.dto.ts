import { IsString, IsEmail, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class PersonaActualizarDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellido?: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}

export class ActualizarUsuarioDto {
  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsString()
  contrasena?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PersonaActualizarDto)
  persona?: PersonaActualizarDto;
}
