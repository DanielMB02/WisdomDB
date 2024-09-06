import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Purchase } from './purchase.entity';

@Entity({ name: 'purchase_costs' })
export class PurchaseCost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  purchaseDate: Date; //Fecha de la compra

  @Column()
  product: string; //Producto adquirido

  @ManyToOne(() => Supplier, supplier => supplier.purchaseCosts)
  supplier: Supplier; //Proveedor

  @Column()
  quantity: number; //Cantidad adquirida

  @Column()
  unitPrice: number; //Precio unitario

  @Column()
  total: number; //Total de la compra

  @Column()
  localTaxes: number;//Impuestos locales

  @Column()
  internalShippingCosts: number; //Gastos de envío internos

  @Column()
  totalPaid: number; //Total pagado

  @Column()
  paymentType: number; //Método de pago

  @OneToMany(() => Purchase, purchase => purchase.purchaseCost)
  purchases: Purchase[];

}