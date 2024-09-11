
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string; // Nombre de l tipo

  @OneToMany(() => Product, product => product.type)
  products: Product[];
 
}