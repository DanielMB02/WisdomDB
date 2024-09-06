import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Shipment } from './shipment-receivement.entity';

@Entity({ name: 'complaints' })
export class Complaints {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  details: string; //Detalles del reclamo
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  createdAt: Date; //Fecha de emisión
  @ManyToOne(() => Shipment, shipment => shipment.complaints)
  shipment: Shipment;

}