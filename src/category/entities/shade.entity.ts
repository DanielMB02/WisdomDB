
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Shade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string; // Nombre del tono

  @OneToMany(() => Product, product => product.shade)
  products: Product[];
 
}