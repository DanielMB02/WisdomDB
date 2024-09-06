import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomerAccountStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  financialSummary: string; // Resumen de Movimientos Financieros

  @Column()
  transactionDetail: string; // Detalle de Transacciones
}
