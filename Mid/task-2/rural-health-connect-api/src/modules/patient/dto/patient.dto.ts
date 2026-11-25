import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreatePatientDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsDateString()
    dateOfBirth!: string;

    @IsNotEmpty()
    @IsString()
    address!: string;

    @IsNotEmpty()
    @IsString()
    emergencyContact!: string;
}