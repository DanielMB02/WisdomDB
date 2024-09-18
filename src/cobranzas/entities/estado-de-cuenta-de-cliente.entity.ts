import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EstadoDeCuentaDeCliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resumenDeMovimientos: string; // Resumen de Movimientos Financieros

  @Column()
  detalleDeTransaccciones: string; // Detalle de Transacciones
}
