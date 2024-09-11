import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BankControl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionRecord: string; // Registro de las transacciones bancarias

  @Column('decimal')
  balance: number; // Saldo actual, actualizado con cada transacción

  @Column()
  verification: string; // Detalles sobre la verificación y conciliación

  @Column()
  balanceTracking: string; // Seguimiento de los saldos en el tiempo

  //Faltan Transacciones bancarias
}
