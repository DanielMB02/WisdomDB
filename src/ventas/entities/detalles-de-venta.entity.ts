import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Venta } from './venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity('detalle_de_venta')
export class DetalleDeVenta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Venta, venta => venta.detalles)
  venta: Venta; // Relación con la venta

  @ManyToOne(() => Producto, producto => producto.detalleDeVenta)
  producto: Producto; // Relación con el producto

  @Column()
  cantidad: number; // Cantidad de producto vendido

  @Column('decimal')
  precioTotal: number; // Precio total para este producto en la venta
}
