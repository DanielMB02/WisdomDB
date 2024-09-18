import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Almacen } from './almacen.entity';
import { MovimientoDeProductos } from './movimiento-de-productos.entity';
import { Compra } from 'src/compras/entities/compra.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stock: number; //Cantidad en stock

  @Column()
  direccion: string; //Ubicación física

  @Column()
  fechaEntrada: Date;//Fecha de entrada

  @Column()
  fechaSalida: Date; //Fecha de salida

  @Column()
  maxStock: number; //Stock máximo

  @Column()
  minStock: number; //Stock Mínimo

  @Column()
  valor: number; //Valor de inventario

  @Column()
  seguimiento: string; //Seguimiento (tracking)

  @Column()
  numeroDeSerie: string; //Número de serie

  @Column()
  metodoDeValoracion: string; //Método de valoración

  @ManyToOne(() => Almacen, almacen => almacen.inventarios)
  almacen: Almacen;

  @OneToMany(() => MovimientoDeProductos, movimientoDeProductos => movimientoDeProductos.inventario)
  movimientoDeProductos: MovimientoDeProductos[];

  @OneToMany(() => Compra, compra => compra.inventario)
  compras: Compra[]; //Registro de compra

  @OneToMany(() => Producto, producto => producto.inventario)
  productos: Producto[]; //Productos asociados
}
