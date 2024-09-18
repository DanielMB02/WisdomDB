import { MovimientoDeProductos } from 'src/almacenes/entities/movimiento-de-productos.entity';
import { ComisionPorProducto } from 'src/comisiones/entities/comision-por-producto.entity';
import { DetalleDeCompra } from 'src/compras/entities/detalle-de-compra.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fabrica } from './fabrica.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Tipo } from 'src/categorias/entities/tipo.entity';
import { Tono } from 'src/categorias/entities/tono.entity';
import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Almacen } from 'src/almacenes/entities/almacen.entity';
import { TransferenciaDeAlmacen } from 'src/almacenes/entities/transferencia-de-almacen.entity';
import { Descuento } from 'src/descuentos/entities/descuento.entity';
import { Devolucion } from 'src/devoluciones/entities/devolucion.entity';
import { Inventario } from 'src/almacenes/entities/inventario.entity';
import { DetalleDeVenta } from 'src/ventas/entities/detalles-de-venta.entity';

@Entity({ name: 'productos' })
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // origen: string; //Procedencia del producto

  // @Column()
  // fabrica: string; //Fábrica

  @ManyToOne(() => Fabrica, (fabrica) => fabrica.productos)
  fabrica: Fabrica; //Categoría o clase del producto

  @Column()
  formato: string; //Formato(Medida) del producto

  @Column()
  codigo: string; //Código del producto

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria; //Categoría o clase del producto

  @ManyToOne(() => Tipo, (tipo) => tipo.productos)
  tipo: Tipo; //Tipo 

  @ManyToOne(() => Tono, (tono) => tono.productos)
  tono: Tono; //Tono 

  @Column('decimal')
  precioUnitario: number; //Precio unitario del producto

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
  proveedor: Proveedor;

  // @Column()
  // stock: number; //stock del producto

  @Column()
  descripcion: string; //Descripción

  @Column()
  piezasPorCaja: number; //Piezas por caja

  @Column()
  cajasPorPallet: number; //Cajas por pallets

  @Column()
  numeroDeCajas: number; //Número de cajas

  @Column()
  numeroDePallets: number; //Número de pallets

  @ManyToOne(() => Almacen, almacen => almacen.producto)
  almacen: Almacen;

  @ManyToOne(() => TransferenciaDeAlmacen, transferenciaDeAlmacen => transferenciaDeAlmacen.productos)
  transferenciaDeAlmacen: TransferenciaDeAlmacen;

  @ManyToOne(() => Descuento, (descuento) => descuento.productos)
  descuento: Descuento; //descuento asociado al producto

  @ManyToOne(() => Devolucion, (devolucion) => devolucion.productos)
  devoluciones: Devolucion; //Devolución asociada al producto

  @ManyToOne(() => Inventario, (inventario) => inventario.productos)
  inventario: Inventario; //Inventario

  @ManyToOne(() => MovimientoDeProductos, (movimientoDeProductos) => movimientoDeProductos.productos)
  movimientoDeProductos: MovimientoDeProductos; //Movimiento de productos (Entrada o salida)

  @ManyToOne(() => ComisionPorProducto, (comisionPorProducto) => comisionPorProducto.productos)
  comisionPorProducto: ComisionPorProducto; //Comisión del producto

  @OneToMany(() => DetalleDeCompra, detalleDeCompra => detalleDeCompra.producto)
  detalleDeCompra: DetalleDeCompra[]; //Detalle de compras

  @OneToMany(() => DetalleDeVenta, detalleDeVenta => detalleDeVenta.producto)
  detalleDeVenta: DetalleDeVenta[]; //Detalle de ventas
  
}
