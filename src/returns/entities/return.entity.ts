import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class ReturnEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    returnDate: Date;

    @Column()
    reason: string;

    // @ManyToOne(() => Client, (client) => client.returns)
    // client: Client; //Cliente que realiza la devolución

    //@OneToMany(() => Product, (product) => product.returns)
    //products: Product[]; //Productos devueltos
    
}
