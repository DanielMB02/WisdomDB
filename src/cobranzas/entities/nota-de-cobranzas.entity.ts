import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class NotasDeCobranza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fechaDeCobranza: Date; // Fecha de cobranza

  @Column()
  registroDeCobranzas: string; // Registro de Cobranzas

  @Column()
  registroDeComprobantes: string; // Generación de Comprobantes

  @ManyToOne(() => Cliente, (cliente) => cliente.notas)
  cliente: Cliente; //Cliente asociado a la nota
}
