import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctorsTable1795610652315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
            new Table({
                name: "doctors",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "phone", type: "varchar", isNullable: false, isUnique: true },
                    { name: "specialization", type: "varchar", isNullable: false },
                    { name: "qualification", type: "varchar", isNullable: false },
                    { name: "verification_status", type: "varchar", isNullable: false, default: "'pending'" },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable("doctors");
    }

}
