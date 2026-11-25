import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "patients" })
export class Patient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    phone!: string;

    @Column({ type: "date" })
    dateOfBirth!: string;

    @Column()
    address!: string;

    @Column()
    emergencyContact!: string;
}