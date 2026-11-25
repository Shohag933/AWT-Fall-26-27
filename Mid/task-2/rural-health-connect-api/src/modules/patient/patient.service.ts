import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./entities/patient.entity";
import { CreatePatientDto } from "./dto/patient.dto";

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
    ) {}

    async createPatient(dto: CreatePatientDto) {
        try {
            const oldPatient = await this.patientRepository.findOne({ where: { phone: dto.phone } });
            if (oldPatient) {
                throw new ConflictException("Phone number already exists");
            }
            const patient = this.patientRepository.create(dto);
            return await this.patientRepository.save(patient);
        } catch (error) {
            throw error;
        }
    }

    async getPatients() {
        try {
            return await this.patientRepository.find({ order: { id: "ASC" } });
        } catch (error) {
            throw error;
        }
    }
}