
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Supplier } from './supplier.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movementType: string; // Tipo de movimiento

  @Column()
  description: string; //Descripción

  @Column({ type: 'date' })
  movementDate: Date; //Fecha del movimiento

  @ManyToOne(() => Supplier, supplier => supplier.transactions)
  supplier: Supplier;
}