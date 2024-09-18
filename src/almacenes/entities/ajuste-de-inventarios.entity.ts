import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Inventario } from './inventario.entity';

@Entity()
export class AjusteDeInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  fecha: Date; //Fecha del  ajuste

  @Column()
  tipoDeAjuste: string; // Tipo de ajuste (Entrada o salida)

  @Column()
  cantidad: number; //cantidad ajustada

  @Column()
  motivo: string; //Motivo del ajuste

  @ManyToOne(() => Inventario, (inventario) => inventario.movimientoDeProductos)
  inventario: Inventario;
}
