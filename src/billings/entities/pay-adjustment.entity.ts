import { Client } from 'src/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class PaymentAdjustment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adjustmentRecord: string; // Registro de Ajustes (Faltan ajustes de cobros)

  @Column()
  adjustmentJustification: string; // Justificación de Ajustes 

  @ManyToOne(() => Client, (client) => client.payAdjustments)
  client: Client; //Cliente asociado al ajuste de cobros
}
