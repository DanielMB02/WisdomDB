import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IncomeBox } from './income-box.entity';

@Entity()
export class IncomeBoxControl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supervision: string; // Supervisión y verificación

  @Column()
  documentComparison: string; // Comparación con documentos de respaldo

  @Column()
  securityMeasures: string; // Medidas de seguridad

  @ManyToOne(() => IncomeBox, (incomeBox) => incomeBox.incomeBoxControl)
  incomeBox: IncomeBox; //Cajas de ingreso
}
