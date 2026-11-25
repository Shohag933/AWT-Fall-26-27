import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Doctor } from "./entities/doctor.entity";
import { CreateDoctorDto } from "./dto/doctor.dto";

@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>,
    ) {}

    async createDoctor(dto: CreateDoctorDto) {
        try {
            const oldDoctor = await this.doctorRepository.findOne({ where: { phone: dto.phone } });
            if (oldDoctor) {
                throw new ConflictException("Phone number already exists");
            }
            const doctor = this.doctorRepository.create(dto);
            return await this.doctorRepository.save(doctor);
        } catch (error) {
            throw error;
        }
    }

    async getDoctors() {
        try {
            return await this.doctorRepository.find({ order: { id: "ASC" } });
        } catch (error) {
            throw error;
        }
    }
}