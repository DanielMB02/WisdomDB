import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Inventory } from './inventory.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class ProductMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movementType: string; // Tipo de movimiento

  @Column()
  description: string; //Descripción

  @Column()
  movementDate: Date; //Fecha del movimiento

  @ManyToOne(() => Inventory, inventory => inventory.productMovements)
  inventory: Inventory;

  @OneToMany(() => Product, product => product.productMovement)
  products: Product[]; //Productos asociados
}
