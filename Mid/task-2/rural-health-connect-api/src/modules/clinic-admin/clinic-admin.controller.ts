import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { ClinicAdminService } from "./clinic-admin.service";
import { CreateClinicAdminDto } from "./dto/clinic-admin.dto";

const bodyPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

@Controller("clinic-admins")
export class ClinicAdminController {
    constructor(private readonly clinicAdminService: ClinicAdminService) {}

    @Post()
    async createClinicAdmin(@Body(bodyPipe) dto: CreateClinicAdminDto) {
        return await this.clinicAdminService.createClinicAdmin(dto);
    }

    @Get()
    async getClinicAdmins() {
        return await this.clinicAdminService.getClinicAdmins();
    }
}