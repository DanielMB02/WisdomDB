import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reclamos } from './devoluciones-reclamos.entity';
import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Compra } from 'src/compras/entities/compra.entity';

@Entity({ name: 'envios_y_recepciones' })
export class EnviosYRecepciones {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  number: number; //Número de seguimiento
  @ManyToOne(() => Proveedor, proveedor => proveedor.envios)
  proveedor: Proveedor;
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fechaDeEnvio: Date; //Fecha de envío
  @Column({ type: 'date' })
  fechaDeRecepcion: Date; //Fecha de recepción
  @Column()
  estadoDeOrden: string; //Estado de la orden
  @Column('text', { array: true, nullable: true })
  productosEnviados: string[]; //Productos enviados
  @Column('text', { array: true, nullable: true })
  documentacionAdjunta: string[]; //Documentación adjunta (Notas de entrega, documentación adjunta y firmas)
  @Column()
  estadoDeRecepcion: string; //Estado de la recepción
  @OneToMany(() => Reclamos, reclamos => reclamos.envio)
  reclamos: Reclamos[]; //Registro de devoluciones o reclamos
  @OneToMany(() => Compra, compra => compra.envios)
  compras: Compra[]; //Orden de compra

  

}
