import { Entity, PrimaryGeneratedColumn, Column, Check, CreateDateColumn, UpdateDateColumn,  } from "typeorm";

/**
 * Entity type used by TypeORM to make changes to the PostgreSQL table
 */
@Entity("shapes")
@Check('"updatedDate" >= "createdDate"')
export class ShapeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("uuid", { unique: true, nullable: false })
    uuid: string;

    @Column({ nullable: false })
    layoutName: string;

    @Column({ nullable: false })
    top: number;

    @Column({ nullable: false })
    left: number;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    width: number;

    @Column({ nullable: true })
    rx: number;

    @Column({ nullable: true })
    ry: number;

    @Column({ nullable: true })
    angle: number;

    @Column({ nullable: false })
    label: string;

    @Column({ nullable: false })
    section: string;

    @Column({ nullable: false })
    customType: string;

    @CreateDateColumn({ nullable: false })
    createdDate: Date;

    @UpdateDateColumn({ nullable: false })
    updatedDate: Date;
}