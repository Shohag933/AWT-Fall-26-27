import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { CreateDoctorDto } from "./dto/doctor.dto";

const bodyPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

@Controller("doctors")
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {}

    @Post()
    async createDoctor(@Body(bodyPipe) dto: CreateDoctorDto) {
        return await this.doctorService.createDoctor(dto);
    }

    @Get()
    async getDoctors() {
        return await this.doctorService.getDoctors();
    }
}