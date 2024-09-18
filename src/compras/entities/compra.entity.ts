import { Inventario } from 'src/almacenes/entities/inventario.entity';
import { CostosDeImportacion } from 'src/costos-de-importacion/entities/costos-de-importacion.entity';
import { EnviosYRecepciones } from 'src/envios-recepciones/entities/envios-recepciones.entity';
import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CostosDeCompra } from './costos-de-compra.entity';
import { DetalleDeCompra } from './detalle-de-compra.entity';

@Entity({ name: 'compras' })
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  numeroDeOrden: number; //Número de Orden de Compra
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fechaEmision: Date; //Fecha de emisión
  @ManyToOne(() => Proveedor, proveedor => proveedor.compras)
  proveedor: Proveedor;
  @Column() 
  productos: string; //Productos-Detalle, podría ir directamnete a productos
  @Column()
  total: number; //Total de la orden
  @Column({ type: 'date', nullable: true })
  fechaEntrega: Date; //Fecha de entrega esperada
  @Column()
  tipoDePago: string; //Tipo de pago
  @Column()
  EstadoDeOrden: string; //Estado de la orden
  @Column()
  NotasAdicionales: string; //Notas adicionales
  @Column('text', { array: true, nullable: true })
  documentosAdjuntos: string[]; //Documentación adjunta
 
  //Relacionar productos

  @OneToMany(() => CostosDeImportacion, costosDeImportacion => costosDeImportacion.compra)
  costosDeImportacion: CostosDeImportacion[]; //Registro de devoluciones o reclamos
  @ManyToOne(() => EnviosYRecepciones , envios => envios.compras)
  envios: EnviosYRecepciones; //Seguimiento de envíos y recepciones

  @ManyToOne(() => Inventario , inventario => inventario.compras)
  inventario: Inventario; //Inventario

  @ManyToOne(() => CostosDeCompra , costosDeCompra => costosDeCompra.compra)
  costosDeCompra: CostosDeCompra; //Costos de compra

  @OneToMany(() => DetalleDeCompra, detalle => detalle.compra, { cascade: true })
  detalles: DetalleDeCompra[]; // Detalles de la compra
}
