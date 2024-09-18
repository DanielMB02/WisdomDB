import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class AjusteDeCobros {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registroDeAjustes: string; // Registro de Ajustes (Faltan ajustes de cobros)

  @Column()
  justificacionDeAjustes: string; // Justificación de Ajustes 

  @ManyToOne(() => Cliente, (cliente) => cliente.ajusteDeCobros)
  cliente: Cliente; //Cliente asociado al ajuste de cobros
}
