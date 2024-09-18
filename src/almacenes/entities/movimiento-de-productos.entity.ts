import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Inventario } from './inventario.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class MovimientoDeProductos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoMovimiento: string; // Tipo de movimiento

  @Column()
  descripcion: string; //Descripción

  @Column()
  fechaDeMovimiento: Date; //Fecha del movimiento

  @ManyToOne(() => Inventario, inventario => inventario.movimientoDeProductos)
  inventario: Inventario;

  @OneToMany(() => Producto, producto => producto.movimientoDeProductos)
  productos: Producto[]; //Productos asociados
}
