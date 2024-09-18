import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ControlDeBancos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registroTransacciones: string; // Registro de las transacciones bancarias

  @Column('decimal')
  saldoActual: number; // Saldo actual, actualizado con cada transacción

  @Column()
  verificacion: string; // Detalles sobre la verificación y conciliación

  @Column()
  seguimientoDeSaldos: string; // Seguimiento de los saldos en el tiempo

  //Faltan Transacciones bancarias
}
