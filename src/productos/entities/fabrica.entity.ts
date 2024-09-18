
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class Fabrica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // Nombre de la fábrica

  @Column()
  pais: string; //País

  @OneToMany(() => Producto, producto => producto.fabrica)
  productos: Producto[];
 
}