import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClinicAdminController } from "./clinic-admin.controller";
import { ClinicAdminService } from "./clinic-admin.service";
import { ClinicAdmin } from "./entities/clinic-admin.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ClinicAdmin])],
  controllers: [ClinicAdminController],
  providers: [ClinicAdminService],
})
export class ClinicAdminModule {}