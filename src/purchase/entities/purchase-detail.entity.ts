import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity({ name: 'purchase_details' })
export class PurchaseDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string; // Nombre del producto

  @Column()
  quantity: number; // Cantidad comprada

  @Column()
  unitPrice: number; // Precio por unidad

  @Column()
  subtotal: number; // Subtotal para esta línea de detalle

  @Column({ nullable: true })
  additionalNotes: string; // Notas adicionales para la compra

  @ManyToOne(() => Purchase, purchase => purchase.details)
  purchase: Purchase; // Relación con la compra principal

  @ManyToOne(() => Product, product => product.purchaseDetails)
  product: Product; // Relación con el producto
}
