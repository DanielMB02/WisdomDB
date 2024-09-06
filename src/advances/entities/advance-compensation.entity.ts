import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sale } from 'src/sale/entities/sale.entity';
import { Advance } from './advance.entity';

@Entity()
export class AdvanceCompensation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, salesNote => salesNote.advanceCompensations)
  salesNote: Sale; //Asociación con notas de venta

  @ManyToOne(() => Advance, advance => advance.compensations)
  advance: Advance;

  @Column('decimal', { precision: 10, scale: 2 })
  appliedAmount: number; //Aplicación del anticipo
}
