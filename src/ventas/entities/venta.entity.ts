import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DetalleDeVenta } from './detalles-de-venta.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CompensacionDeAnticipos } from 'src/anticipos/entities/compensacion-de-anticipo.entity';
import { Descuento } from 'src/descuentos/entities/descuento.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fechaDeVenta: Date; // Fecha de la venta

  @Column()
  producto: string; // Producto vendido

  @Column('decimal')
  monto: number; // Monto de la venta

  @Column()
  metodoDePago: string; // Método de pago

  @Column()
  status: boolean; // Estado de la venta

  @Column({ nullable: true })
  notasAdicionales: string; // Notas adicionales

  @ManyToOne(() => Cliente, (cliente) => cliente.ventas)
  cliente: Cliente; //Cliente asignado

  @ManyToOne(() => Usuario, (usuario) => usuario.ventas)
  usuario: Usuario; //Vededor asignado

  @OneToMany(
    () => CompensacionDeAnticipos,
    (advanceCompensation) => advanceCompensation.notaDeVenta,
  )
  compensacionDeAnticipos: CompensacionDeAnticipos[]; //Ventas asociadas al cliente

  @ManyToOne(() => Descuento, (descuento) => descuento.ventas)
  descuento: Descuento; //Descuento en la venta

  @OneToMany(() => DetalleDeVenta, (detalle) => detalle.venta)
  detalles: DetalleDeVenta[]; // Relación con el detalle de ventas
}
