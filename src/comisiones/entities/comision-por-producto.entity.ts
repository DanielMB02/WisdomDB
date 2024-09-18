import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ComisionPorProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number; // Montos de Comisiones por Producto

  @OneToMany(() => Producto, producto => producto.comisionPorProducto)
  productos: Producto[]; //Producto asociado a la comisión

  
}
