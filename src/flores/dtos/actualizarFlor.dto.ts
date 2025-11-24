import { IsString, IsNumber, IsOptional, Min, MaxLength } from "class-validator";

export class ActualizarFlorDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    nombreFlor?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    color?: string;

    @IsOptional()
    @IsString()
    significado?: string;

    @IsOptional()
    @IsNumber()
    @Min(0.01)
    precio?: number;

    @IsOptional()
    @IsString()
    imagen?: string;

    @IsOptional()
    @IsString()
    usuarioModificacion?: string;
}
