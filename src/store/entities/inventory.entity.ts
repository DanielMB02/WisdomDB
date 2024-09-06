import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Store } from './store.entity';
import { ProductMovement } from './product-movement.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stock: number; //Cantidad en stock

  @Column()
  location: string; //Ubicación física

  @Column()
  entryDate: Date;//Fecha de entrada

  @Column()
  exitDate: Date; //Fecha de salida

  @Column()
  maxStock: number; //Stock máximo

  @Column()
  minStock: number; //Stock Mínimo

  @Column()
  value: number; //Valor de inventario

  @Column()
  tracking: string; //Seguimiento

  @Column()
  serialNumber: string; //Número de serie

  @Column()
  valuationMethod: string; //Método de valoración


  @ManyToOne(() => Store, store => store.inventories)
  store: Store;

  @OneToMany(() => ProductMovement, productMovement => productMovement.inventory)
  productMovements: ProductMovement[];

  @OneToMany(() => Purchase, purchase => purchase.inventory)
  purchases: Purchase[]; //Registro de compra

  @OneToMany(() => Product, product => product.inventory)
  products: Product[]; //Productos asociados
}
