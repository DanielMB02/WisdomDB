import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CommissionAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  commissionAssignment: string; // Asignación de Comisiones (No sé cómo se asignará la comisión)

  @Column('decimal')
  commissionPercentage: number; // Porcentajes de Comisión

  @ManyToOne(() => User, (user) => user.commissionAssignment)
  user: User;
}
