import { AdvanceCompensation } from 'src/advances/entities/advance-compensation.entity';
import { Client } from 'src/client/entities/client.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  saleDate: Date; // Fecha de la venta

  @Column()
  product: string; // Producto vendido

  @Column('decimal')
  amount: number; // Monto de la venta

  @Column()
  paymentMethod: string; // Método de pago

  @CreateDateColumn()
  createdAt: Date; //Fecha de creación de venta

  @Column()
  status: boolean; // Estado de la venta

  @Column('text', { nullable: true })
  notes: string; // Notas adicionales

  @ManyToOne(() => Client, (client) => client.sales)
  client: Client; //Cliente asignado

  @ManyToOne(() => User, (user) => user.sales)
  user: User; //Vededor asignado

  @OneToMany(() => AdvanceCompensation, advanceCompensation => advanceCompensation.salesNote)
  advanceCompensations: AdvanceCompensation[]; //Ventas asociadas al cliente

  @ManyToOne(() => Discount, (discount) => discount.sales)
  discount: Discount; //Descuento en la venta



}
