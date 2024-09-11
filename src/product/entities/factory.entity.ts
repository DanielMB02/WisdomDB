
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Factory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string; // Nombre de la fábrica

  @Column()
  country: string; //País

  @OneToMany(() => Product, product => product.factory)
  products: Product[];
 
}