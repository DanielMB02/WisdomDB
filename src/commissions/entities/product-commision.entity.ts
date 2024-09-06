import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ProductCommission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commissionAmount: number; // Montos de Comisiones por Producto

  @OneToMany(() => Product, product => product.productCommission)
  products: Product[]; //Producto asociado a la comisión

  
}
