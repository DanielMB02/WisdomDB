import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sale } from './sale.entity';
import { Product } from 'src/product/entities/product.entity'; // Relación con la entidad de productos

@Entity('sale_details')
export class SaleDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, sale => sale.details)
  sale: Sale; // Relación con la venta

  @ManyToOne(() => Product, product => product.saleDetails)
  product: Product; // Relación con el producto

  @Column()
  quantity: number; // Cantidad de producto vendido

  @Column('decimal')
  totalPrice: number; // Precio total para este producto en la venta
}
