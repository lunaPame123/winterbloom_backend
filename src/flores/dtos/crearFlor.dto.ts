import { IsString, IsNumber, IsOptional, Min, MaxLength } from "class-validator";

export class CrearFlorDto {
    @IsString()
    @MaxLength(100)
    nombreFlor!: string;

    @IsString()
    @MaxLength(50)
    color!: string;

    @IsOptional()
    @IsString()
    significado?: string;

    @IsNumber()
    @Min(0.01)
    precio!: number;

    @IsOptional()
    @IsString()
    imagen?: string;

    @IsOptional()
    @IsString()
    usuarioCreacion?: string;
}