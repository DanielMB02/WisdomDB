import { Client } from 'src/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { AdvanceControl } from './advance-control.entity';
import { AdvanceCompensation } from './advance-compensation.entity';

@Entity()
export class Advance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number; //Monto del anticipo

  @Column('timestamp')
  date: Date; //Fecha

  @ManyToOne(() => Client, client => client.advances)
  client: Client; 

  @ManyToOne(() => AdvanceControl, advanceControl => advanceControl.advances)
  advanceControl: AdvanceControl; 

  @Column({ nullable: true })
  additionalInfo: string; //Información adicional

  @OneToMany(() => AdvanceCompensation, advanceCompensation => advanceCompensation.advance)
  compensations: AdvanceCompensation[]; 
}
