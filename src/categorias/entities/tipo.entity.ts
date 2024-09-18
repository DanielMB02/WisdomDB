
import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Tipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string; // Nombre del tipo

  @OneToMany(() => Producto, producto => producto.tipo)
  productos: Producto[];
 
}