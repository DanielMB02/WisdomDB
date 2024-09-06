import { Advance } from 'src/advances/entities/advance.entity';
import { BillingNote } from 'src/billings/entities/billing-note.entity';
import { PaymentAdjustment } from 'src/billings/entities/pay-adjustment.entity';
import { TransferSales } from 'src/billings/entities/transfer-sales.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ReturnEntity } from 'src/returns/entities/return.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Store } from 'src/store/entities/store.entity';
import { Zone } from 'src/zone/entities/zone.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';

@Entity('clients')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Client {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, length: 60 })
  name: string; //Nombre del cliente
  @Column({ unique: true, length: 20 }) 
  code: string; //Código del cliente
  @Column({ unique: true, length: 20 })
  nit: string; //Nit del cliente
  @Column('text', { array: true, nullable: true })
  phone: string[]; //Teléfonos del cliente
  @Column({ length: 60 })
  address: string; //Dirección del cliente
  /* Zona del cliente
  //
  // @Column({ length: 20 })
  // region: string; //ciudad del cliente
  //
  */
  @OneToMany(() => Sale, sale => sale.client)
  sales: Sale[]; //Ventas asociadas al cliente
  @OneToMany(() => Advance, advance => advance.client)
  advances: Advance[]; //Ventas asociadas al cliente
  @ManyToOne(() => Discount, (discount) => discount.clients)
  discount: Discount; //descuento asociado al cliente
  @ManyToOne(() => Zone, (zone) => zone.clients)
  zone: Zone; //Zona asociada al cliente
  @ManyToOne(() => Store, (store) => store.clients)
  store: Store; //Almacén asociado al cliente
  // @OneToMany(() => ReturnEntity, returns => returns.client)
  // returns: ReturnEntity[]; //Devoluciones asociadas al cliente
  @OneToMany(() => BillingNote, billingNote => billingNote.client)
  notes: BillingNote[]; //Devoluciones asociadas al cliente
  @OneToMany(() => TransferSales, transferSales => transferSales.client)
  transferSales: TransferSales[]; //Ventas por transferencia asociadas al cliente
  @OneToMany(() => PaymentAdjustment, payAdjustments => payAdjustments.client)
  payAdjustments: PaymentAdjustment[]; //Ajustes de cobros

}
