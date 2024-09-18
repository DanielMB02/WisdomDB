
import { Descuento } from 'src/descuentos/entities/descuento.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string; // Nombre de la categoría

  @OneToMany(() => Producto, producto => producto.categoria)
  productos: Producto[]; 

  @ManyToOne(() => Descuento, (descuento) => descuento.categoria)
  descuento: Descuento; //descuento asociado a la catetgoría
 
}