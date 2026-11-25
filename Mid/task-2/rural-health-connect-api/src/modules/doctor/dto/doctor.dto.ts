import { IsNotEmpty, IsString } from "class-validator";

export class CreateDoctorDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsString()
    specialization!: string;

    @IsNotEmpty()
    @IsString()
    qualification!: string;
}