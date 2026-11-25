import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;

    @IsInt()
    @Min(18)
    @Max(100)
    age!: number;

    @IsInt()
    @Min(0)
    @Max(80)
    yearsOfWorking!: number;
}

export class UpdateEmployeeDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password?: string;

    @IsOptional()
    @IsInt()
    @Min(18)
    @Max(100)
    age?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(80)
    yearsOfWorking?: number;
}