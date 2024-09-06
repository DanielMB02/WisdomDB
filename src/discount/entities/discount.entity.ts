import { Category } from "src/category/entities/category.entity";
import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Sale } from "src/sale/entities/sale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('discounts')
export class Discount {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    discountPercentage: number; //Porcentaje del descuento aplicado

    @Column()
    discountConditions: string; //Condiciones del descuento

    @Column()
    discountValidity: Date; //Vigencia del descuento (Fecha de expiración)

    @OneToMany(() => Client, client => client.discount)
    clients: Client[]; 

    @OneToMany(() => Category, category => category.discount)
    categories: Category[]; 

    @OneToMany(() => Product, product => product.discount)
    products: Product[];

    @OneToMany(() => Sale, sale => sale.discount)
    sales: Sale[];

}
