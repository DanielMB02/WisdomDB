import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CajasDeIngreso } from './cajas-de-ingreso.entity';

@Entity()
export class ControlDeCajasDeIngreso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supervision: string; // Supervisión y verificación

  @Column()
  comparacionDeDocumentos: string; // Comparación con documentos de respaldo

  @Column()
  medidasDeSeguridad: string; // Medidas de seguridad

  @ManyToOne(() => CajasDeIngreso, (cajasDeIngreso) => cajasDeIngreso.controlDeCajasDeIngreso)
  cajasDeIngreso: CajasDeIngreso; //Cajas de ingreso
}
