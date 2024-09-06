import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Advance } from './advance.entity';

@Entity()
export class AdvanceControl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string; // Estado del anticipo

  @OneToMany(() => Advance, advancePayment => advancePayment.advanceControl)
  advances: Advance[]; // Historial de anticipos

  @Column({ nullable: true })
  report: string; // Informe y análisis
}
