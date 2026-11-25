import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClinicAdmin } from "./entities/clinic-admin.entity";
import { CreateClinicAdminDto } from "./dto/clinic-admin.dto";

@Injectable()
export class ClinicAdminService {
    constructor(
        @InjectRepository(ClinicAdmin)
        private readonly clinicAdminRepository: Repository<ClinicAdmin>,
    ) {}

    async createClinicAdmin(dto: CreateClinicAdminDto) {
        try {
            const oldAdmin = await this.clinicAdminRepository.findOne({ where: { phone: dto.phone } });
            if (oldAdmin) {
                throw new ConflictException("Phone number already exists");
            }
            const clinicAdmin = this.clinicAdminRepository.create(dto);
            return await this.clinicAdminRepository.save(clinicAdmin);
        } catch (error) {
            throw error;
        }
    }

    async getClinicAdmins() {
        try {
            return await this.clinicAdminRepository.find({ order: { id: "ASC" } });
        } catch (error) {
            throw error;
        }
    }
}