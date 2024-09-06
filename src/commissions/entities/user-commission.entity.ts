import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class UserCommission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  individualCommission: number; // Cálculo de Comisiones Individuales

  @Column('text')
  transparencyAndClarity: string; // Transparencia y Claridad

  @ManyToOne(() => User, (user) => user.userCommission)
  user: User; //Vendedor asignado
}
