import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { ControlDeAnticipo } from './control-de-anticipo.entity';
import { CompensacionDeAnticipos } from './compensacion-de-anticipo.entity';

@Entity()
export class Anticipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number; //Monto del anticipo

  @CreateDateColumn()
  fecha: Date; //Fecha

  @ManyToOne(() => Cliente, cliente => cliente.anticipos)
  cliente: Cliente; 

  @ManyToOne(() => ControlDeAnticipo, controlDeAnticipos => controlDeAnticipos.anticipos)
  controlDeAnticipo: ControlDeAnticipo; 

  @Column({ nullable: true })
  informacionAdicional: string; //Información adicional

  @OneToMany(() => CompensacionDeAnticipos, compensacionDeAnticipos => compensacionDeAnticipos.anticipo)
  compensaciones: CompensacionDeAnticipos[]; 
}
