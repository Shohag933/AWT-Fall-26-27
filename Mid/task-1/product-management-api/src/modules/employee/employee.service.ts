import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    async createEmployee(dto: CreateEmployeeDto) {
        try {
            const employee = this.employeeRepository.create(dto);
            return await this.employeeRepository.save(employee);
        } catch (error) {
            throw error;
        }
    }

    async getEmployees() {
        try {
            return await this.employeeRepository.find({ order: { id: "ASC" } });
        } catch (error) {
            throw error;
        }
    }

    async getEmployee(id: number) {
        try {
            const employee = await this.employeeRepository.findOne({ where: { id } });
            if (!employee) {
                throw new NotFoundException("Employee not found");
            }
            return employee;
        } catch (error) {
            throw error;
        }
    }

    async updateEmployee(id: number, dto: UpdateEmployeeDto) {
        try {
            const employee = await this.getEmployee(id);
            Object.assign(employee, dto);
            return await this.employeeRepository.save(employee);
        } catch (error) {
            throw error;
        }
    }

    async deleteEmployee(id: number) {
        try {
            const employee = await this.getEmployee(id);
            await this.employeeRepository.remove(employee);
            return { message: "Employee deleted" };
        } catch (error) {
            throw error;
        }
    }
}