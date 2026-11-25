import { IsNotEmpty, IsString } from "class-validator";

export class CreateClinicAdminDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsString()
    clinicName!: string;

    @IsNotEmpty()
    @IsString()
    clinicAddress!: string;
}