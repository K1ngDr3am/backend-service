import { Entity, PrimaryGeneratedColumn, Column, NumericType } from "typeorm";

Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("text")
    description!: string;

    @Column("decimal")
    price!: number;
}