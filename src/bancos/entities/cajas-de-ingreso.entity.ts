import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeCajasDeIngreso } from './control-de-cajas-de-ingreso.entity';

@Entity()
export class CajasDeIngreso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fecha: Date; // Fecha del ingreso

  @Column()
  monto: number; // Monto del ingreso

  @Column()
  descripcion: string; // Descripción del ingreso

  @Column()
  fuente: string; // Fuente del ingreso

  @OneToMany(() => ControlDeCajasDeIngreso, controlDeCajasDeIngreso => controlDeCajasDeIngreso.cajasDeIngreso)
  controlDeCajasDeIngreso: ControlDeCajasDeIngreso[]; //Controles de cajas de ingreso
}
