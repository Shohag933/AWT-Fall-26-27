import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatientsTable1795610637686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
            new Table({
                name: "patients",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "phone", type: "varchar", isNullable: false, isUnique: true },
                    { name: "date_of_birth", type: "date", isNullable: false },
                    { name: "address", type: "varchar", isNullable: false },
                    { name: "emergency_contact", type: "varchar", isNullable: false },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable("patients");
    }

}
