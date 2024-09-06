import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Complaints } from './returns-complaints.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Entity({ name: 'shipping' })
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  number: number; //Número de seguimiento
  @ManyToOne(() => Supplier, supplier => supplier.shippings)
  supplier: Supplier;
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  shippedAt: Date; //Fecha de envío
  @Column({ type: 'date' })
  arrivalAt: Date; //Fecha de recepción
  @Column()
  orderState: string; //Estado de la orden
  @Column('text', { array: true, nullable: true })
  productsDelivered: string[]; //Productos enviados
  @Column('text', { array: true, nullable: true })
  attachedDocs: string[]; //Documentación adjunta (Notas de entrega, documentación adjunta y firmas)
  @Column()
  receptionState: string; //Estado de la recepción
  @OneToMany(() => Complaints, complaints => complaints.shipment)
  complaints: Complaints[]; //Registro de devoluciones o reclamos
  @OneToMany(() => Purchase, purchase => purchase.shipment)
  purchases: Purchase[]; //Orden de compra

  

}
