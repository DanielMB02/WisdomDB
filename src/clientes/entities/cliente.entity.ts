
import { Almacen } from 'src/almacenes/entities/almacen.entity';
import { Anticipo } from 'src/anticipos/entities/anticipo.entity';
import { AjusteDeCobros } from 'src/cobranzas/entities/ajuste-de-cobros.entity';
import { NotasDeCobranza } from 'src/cobranzas/entities/nota-de-cobranzas.entity';
import { VentasPorTransferencia } from 'src/cobranzas/entities/ventas-por-transferencia.entity';
import { Descuento } from 'src/descuentos/entities/descuento.entity';
import { Devolucion } from 'src/devoluciones/entities/devolucion.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Zona } from 'src/zonas/entities/zona.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity('clientes')
@TableInheritance({ column: { type: 'varchar', name: 'tipoCliente' } })
export abstract class Cliente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, length: 60 })
  nombre: string; //Nombre del cliente
  @Column({ unique: true, length: 20 })
  codigo: string; //Código del cliente
  @Column({ unique: true, length: 20 })
  nit: string; //Nit del cliente
  @Column('text', { array: true, nullable: true })
  telefono: string[]; //Teléfonos del cliente
  @Column({ length: 60 })
  direccion: string; //Dirección del cliente
  @Column({ type: 'varchar', nullable: false })
  tipoCliente: string;
  @OneToMany(() => Venta, (venta) => venta.cliente)
  ventas: Venta[]; //Ventas asociadas al cliente
  @OneToMany(() => Anticipo, (anticipo) => anticipo.cliente)
  anticipos: Anticipo[]; //Ventas asociadas al cliente
  @ManyToOne(() => Descuento, (descuento) => descuento.clientes)
  descuento: Descuento; //descuento asociado al cliente
  @ManyToOne(() => Zona, (zona) => zona.clientes)
  zona: Zona; //Zona asociada al cliente
  @ManyToOne(() => Almacen, (almacen) => almacen.clientes)
  almacen: Almacen; //Almacén asociado al cliente
  @OneToMany(() => Devolucion, (devolucion) => devolucion.cliente)
  devoluciones: Devolucion[]; //Devoluciones asociadas al cliente
  @OneToMany(() => NotasDeCobranza, (notaDeCobranza) => notaDeCobranza.cliente)
  notas: NotasDeCobranza[]; //Notas de cobranza asociadas al cliente
  @OneToMany(() => VentasPorTransferencia, (ventasPorTransferencia) => ventasPorTransferencia.cliente)
  ventasPorTransferencia: VentasPorTransferencia[]; //Ventas por transferencia asociadas al cliente
  @OneToMany(() => AjusteDeCobros, (ajusteDeCobros) => ajusteDeCobros.cliente)
  ajusteDeCobros: AjusteDeCobros[]; //Ajustes de cobros
}
