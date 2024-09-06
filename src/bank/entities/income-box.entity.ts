import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IncomeBoxControl } from './income-box-control.entity';

@Entity()
export class IncomeBox {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  date: Date; // Fecha del ingreso

  @Column()
  amount: number; // Monto del ingreso

  @Column()
  description: string; // Descripción del ingreso

  @Column()
  source: string; // Fuente del ingreso

  @OneToMany(() => IncomeBoxControl, incomeBoxControl => incomeBoxControl.incomeBox)
  incomeBoxControl: IncomeBoxControl[]; //Controles de cajas de ingreso
}
