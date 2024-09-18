import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Anticipo } from './anticipo.entity';
import { Venta } from 'src/ventas/entities/venta.entity';

@Entity()
export class CompensacionDeAnticipos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Venta, notaDeVenta => notaDeVenta.compensacionDeAnticipos)
  notaDeVenta: Venta; //Asociación con notas de venta

  @ManyToOne(() => Anticipo, anticipo => anticipo.compensaciones)
  anticipo: Anticipo;

  @Column('decimal', { precision: 10, scale: 2 })
  aplicacionDeAnticipo: number; //Aplicación del anticipo
}
