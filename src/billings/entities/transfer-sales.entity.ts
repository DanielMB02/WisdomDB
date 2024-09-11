import { Client } from 'src/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class TransferSales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  saleDate: Date;

  @Column()
  transferRecord: string; // Registro de Ventas por Transferencia

  @Column()
  saleNoteGenerated: string; // Generación de Notas de Venta

  @ManyToOne(() => Client, (client) => client.transferSales)
  client: Client; //Cliente asociado a la venta por transferencia
}
