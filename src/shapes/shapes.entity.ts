import { Entity, PrimaryGeneratedColumn, Column, Check, CreateDateColumn, UpdateDateColumn,  } from "typeorm";

@Entity()
@Check('"updatedDate" >= "createdDate"')
export class Shape {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    layoutName: string;

    @Column("uuid", { unique: true, nullable: false })
    uuid: string;

    @Column('jsonb', { nullable: false, default: {} })
    options: string;

    @CreateDateColumn({ nullable: false })
    createdDate: Date;

    @UpdateDateColumn({ nullable: false })
    updatedDate: Date;
}