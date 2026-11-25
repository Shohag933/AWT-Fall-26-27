import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    ValidationPipe,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

const bodyPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

@Controller("employees")
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async createEmployee(@Body(bodyPipe) dto: CreateEmployeeDto) {
        return await this.employeeService.createEmployee(dto);
    }

    @Get()
    async getEmployees() {
        return await this.employeeService.getEmployees();
    }

    @Get(":id")
    async getEmployee(@Param("id", ParseIntPipe) id: number) {
        return await this.employeeService.getEmployee(id);
    }

    @Patch(":id")
    async updateEmployee(
        @Param("id", ParseIntPipe) id: number,
        @Body(bodyPipe) dto: UpdateEmployeeDto,
    ) {
        return await this.employeeService.updateEmployee(id, dto);
    }

    @Delete(":id")
    async deleteEmployee(@Param("id", ParseIntPipe) id: number) {
        return await this.employeeService.deleteEmployee(id);
    }
}