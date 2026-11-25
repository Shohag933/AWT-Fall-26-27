import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "clinic_admins" })
export class ClinicAdmin {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    phone!: string;

    @Column()
    clinicName!: string;

    @Column()
    clinicAddress!: string;

    @Column({ type: "varchar", default: "active" })
    status!: string;
}