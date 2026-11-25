import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/patient.dto";

const bodyPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

@Controller("patients")
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Post()
    async createPatient(@Body(bodyPipe) dto: CreatePatientDto) {
        return await this.patientService.createPatient(dto);
    }

    @Get()
    async getPatients() {
        return await this.patientService.getPatients();
    }
}