import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "doctors" })
export class Doctor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    phone!: string;

    @Column()
    specialization!: string;

    @Column()
    qualification!: string;

    @Column({ type: "varchar", default: "pending" })
    verificationStatus!: string;
}