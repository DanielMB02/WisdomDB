import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PettyCash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  disbursementAmount: number; // Monto desembolsado (Podría aplicarse a gastos y compras)

  @Column()
  custodianResponsibility: string; // Responsabilidad del custodio

  @Column()
  supervisionRecord: string; // Supervisión y registro

  @Column()
  voucherVerification: string; // Verificación de los comprobantes

  @Column()
  replenishmentAndReconciliation: string; //Reabastecimiento y conciliación

  //Relación con Control de caja chica

}
