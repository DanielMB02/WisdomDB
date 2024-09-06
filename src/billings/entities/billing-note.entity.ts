import { Client } from 'src/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class BillingNote {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  billingDate: Date;

  @Column()
  paymentRecord: string; // Registro de Cobranzas

  @Column()
  receiptGenerated: string; // Generación de Comprobantes

  @ManyToOne(() => Client, (client) => client.notes)
  client: Client; //Cliente asociado a la nota
}
