import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class VentasPorTransferencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fechaVenta: Date;

  @Column()
  registroDeVentasPorTransferencia: string; // Registro de Ventas por Transferencia

  // @Column()
  // notasDeVenta: string; // Generación de Notas de Venta

  @ManyToOne(() => Cliente, (cliente) => cliente.ventasPorTransferencia)
  cliente: Cliente; //Cliente asociado a la venta por transferencia
}
