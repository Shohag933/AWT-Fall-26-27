import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClinicAdminsTable1795610676180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
            new Table({
                name: "clinic_admins",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "phone", type: "varchar", isNullable: false, isUnique: true },
                    { name: "clinic_name", type: "varchar", isNullable: false },
                    { name: "clinic_address", type: "varchar", isNullable: false },
                    { name: "status", type: "varchar", isNullable: false, default: "'active'" },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable("clinic_admins");
    }

}
