import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Anticipo } from './anticipo.entity';

@Entity()
export class ControlDeAnticipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string; // Estado del anticipo

  @OneToMany(() => Anticipo, anticipo => anticipo.controlDeAnticipo)
  anticipos: Anticipo[]; // Historial de anticipos

  @Column({ nullable: true })
  reporte: string; // Informe y análisis
}
