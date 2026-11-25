import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    category!: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    price!: number;

    @IsInt()
    @Min(0)
    quantity!: number;
}

export class UpdateProductDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    category?: string;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    price?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    quantity?: number;
}