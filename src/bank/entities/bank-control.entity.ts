import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BankControl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  transactionRecord: string; // Registro de las transacciones bancarias

  @Column('decimal')
  balance: number; // Saldo actual, actualizado con cada transacción

  @Column('text')
  verification: string; // Detalles sobre la verificación y conciliación

  @Column('text')
  balanceTracking: string; // Seguimiento de los saldos en el tiempo

  //Faltan Transacciones bancarias
}
