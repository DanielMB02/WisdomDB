
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Discount } from 'src/discount/entities/discount.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Nombre de la categoría

  @OneToMany(() => Product, product => product.category)
  products: Product[]; 

  @ManyToOne(() => Discount, (discount) => discount.categories)
  discount: Discount; //descuento asociado a la catetgoría
 
}