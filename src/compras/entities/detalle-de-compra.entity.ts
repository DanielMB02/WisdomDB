import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from './compra.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity({ name: 'detalle_de_compra' })
export class DetalleDeCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreDeProducto: string; // Nombre del producto

  @Column()
  cantidad: number; // Cantidad comprada

  @Column()
  precioUnitario: number; // Precio por unidad

  @Column()
  subtotal: number; // Subtotal para esta línea de detalle

  @Column({ nullable: true })
  notasAdicionales: string; // Notas adicionales para la compra

  @ManyToOne(() => Compra, compra => compra.detalles)
  compra: Compra; // Relación con la compra principal 

  @ManyToOne(() => Producto, producto => producto.detalleDeCompra)
  producto: Producto; // Relación con el producto
}
