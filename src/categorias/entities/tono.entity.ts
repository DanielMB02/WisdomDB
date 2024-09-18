
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Tono {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string; // Nombre del tono (shade)

  @OneToMany(() => Producto, producto => producto.tono)
  productos: Producto[];
 
}