
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoDeMovimiento: string; // Tipo de movimiento

  @Column()
  descripcion: string; //Descripción

  @CreateDateColumn()
  fechaDeMovimiento: Date; //Fecha del movimiento

  @ManyToOne(() => Proveedor, proveedor => proveedor.transacciones)
  proveedor: Proveedor;
}