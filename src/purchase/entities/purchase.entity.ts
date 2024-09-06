import { ImportCosts } from 'src/import-costs/entities/import-cost.entity';
import { Shipment } from 'src/shipment-receivement/entities/shipment-receivement.entity';
import { Inventory } from 'src/store/entities/inventory.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PurchaseCost } from './purchase-costs.entity';

@Entity({ name: 'purchases' })
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  number: number; //Número de Orden de Compra
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  createdAt: Date; //Fecha de emisión
  @ManyToOne(() => Supplier, supplier => supplier.purchases)
  supplier: Supplier;
  @Column()
  products: string; //Productos-Detalle
  @Column()
  total: number; //Total de la orden
  @Column({ type: 'date', nullable: true })
  deliveryDate: Date; //Fecha de entrega esperada
  @Column()
  paymentType: string; //Tipo de pago
  @Column()
  orderState: string; //Estado de la orden
  @Column()
  AditionalNotes: string; //Notas adicionales
  @Column('text', { array: true, nullable: true })
  attachedDoc: string[]; //Documentación adjunta

  //Relacionar productos

  @OneToMany(() => ImportCosts, importCosts => importCosts.purchase)
  importCosts: ImportCosts[]; //Registro de devoluciones o reclamos
  @ManyToOne(() => Shipment , shipment => shipment.purchases)
  shipment: Shipment; //Seguimiento de envíos y recepciones

  @ManyToOne(() => Inventory , inventory => inventory.purchases)
  inventory: Inventory; //Inventario

  @ManyToOne(() => PurchaseCost , purchaseCost => purchaseCost.purchases)
  purchaseCost: PurchaseCost; //Costos de compra

}
