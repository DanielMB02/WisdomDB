import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('importCosts')
export class ImportCosts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  productCost: number; //Costo de los productos

  @Column('decimal', { precision: 10, scale: 2 })
  shippingAndLogistics: number; //Gastos de envío y logística

  @Column('decimal', { precision: 10, scale: 2 })
  customsDuties: number; //Aranceles y tasas de Aduanas

  @Column('decimal', { precision: 10, scale: 2 })
  importTaxes: number; //Impuestos sobre importaciones

  @Column('decimal', { precision: 10, scale: 2 })
  brokerageAndClearanceFees: number; //Cargos de corretaje y despacho aduanero

  @Column('decimal', { precision: 10, scale: 2 })
  storageAndHandlingCosts: number; //Costos de almacenamiento y manipulación

  @Column('decimal', { precision: 10, scale: 2 })
  otherAssociatedCosts: number; //Otros gastos asociados

  @Column('decimal', { precision: 10, scale: 2 })
  totalImportCosts: number; //Total costos de importación

  @ManyToOne(() => Purchase, purchase => purchase.importCosts)
  purchase: Purchase;

  @Column('text', { array: true, nullable: true })
  financialReport: string[]; //Informes financieros
}
