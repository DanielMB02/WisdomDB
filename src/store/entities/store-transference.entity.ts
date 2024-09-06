import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Store } from './store.entity';

@Entity()
export class StoreTransference {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  transferDate: Date;

  @Column()
  origin: string; //Descripción

  @Column()
  destination: string; //Descripción

  @OneToMany(() => Product, (product) => product.storeTransference)
  products: Product[]; //productos transferidos

  @ManyToOne(() => Store, (store) => store.storeTransference)
  store: Store; // Almacén asignado
}
