import { IsString, IsEmail, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class PersonaDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsString()
  @IsNotEmpty()
  telefono!: string;
}

export class CrearUsuarioDto {
  @IsEmail()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  contrasena!: string;

  @ValidateNested()
  @Type(() => PersonaDto)
  persona!: PersonaDto;
}
