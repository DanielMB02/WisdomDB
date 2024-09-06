import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Inventory } from './inventory.entity';

@Entity()
export class InventoryAdjustment {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  adjustmentDate: Date; //Fecha del  ajuste

  @Column()
  adjustmentType: string; // Tipo de ajuste (Entrada o salida)

  @Column()
  quantity: number; //cantidad ajustada

  @Column()
  reason: string; //Motivo del ajuste

  @ManyToOne(() => Inventory, (inventory) => inventory.productMovements)
  inventory: Inventory;
}
