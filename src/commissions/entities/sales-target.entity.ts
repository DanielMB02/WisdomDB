import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SalesTarget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  salesObjective: string; // Establecimiento de Objetivos de Venta (podría ser un número de ventas o un monto establecido)

  @Column()
  performanceTracking: string; // Seguimiento del Desempeño (Podría ser una comparación entre las ventas y la meta de ventas)

  @ManyToOne(() => User, (user) => user.salesTargets)
  user: User;
}
