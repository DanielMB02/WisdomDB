import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enums/user.enum';
import { Sale } from 'src/sale/entities/sale.entity';
import { Zone } from 'src/zone/entities/zone.entity';
import { UserCommission } from 'src/commissions/entities/user-commission.entity';
import { CommissionAssignment } from 'src/commissions/entities/commission.entity';
import { SalesTarget } from 'src/commissions/entities/sales-target.entity';
import { Store } from 'src/store/entities/store.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 60, nullable: true })
  fullname: string; //Nombre completo
  @Column({nullable: true})
  ci: string; //Carnet de identidad
  @Column({ unique: true, length: 60 })
  email: string; //Email, no aparece en la creación del vendedor
  @Column({ length: 200 })
  password: string; //Contraseña, no aparece en la creación del vendedor
  @Column()
  code: string; //Código del vendedor
  @Column()
  phone: string; //Número de teléfono del vendedor
  @Column()
  address: string; //Dirección de la casa del vendedor
  @Column('text', { array: true, nullable: true })
  gps: string[]; //GPS de vendedor (Latitud y longitud)
  @Column({ nullable: true })
  commission: number; //Comisión
  @Column({ type: 'text', nullable: true })
  photo: String; //Foto de la casa del vendedor
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  createdAt: Date; //Fecha de creación de la cuenta
  @Column({ type: 'boolean', default: () => 'true' })
  status: boolean; //Estado
  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole; // Rol de usuario, puede ser: Administrador, Vendedor, Almacenero o Encargado
  @Column()
  relativeName: string; //Nombre completo de un familiar cercano
  @Column()
  relativeAddress: string; //Dirección del familiar
  @Column()
  relativePhone: string; //Número de teléfono del familiar
  @Column('text', { array: true, nullable: true })
  relativeGps: string[]; //GPS de familiar (Latitud y longitud)
  @Column({ type: 'text', nullable: true })
  relativePhoto: String; //Foto de la casa del familiar
  @OneToMany(() => Sale, sale => sale.user)
  sales: Sale[]; 
  @OneToMany(() => Store, store => store.user)
  store: Sale[]; 
  @ManyToOne(() => Zone, (zone) => zone.users)
  zone: Zone; //Zona asignada, tomando en cuenta que una zona tiene varios vendedores

  //Comisiones

  @OneToMany(() => UserCommission, userCommission => userCommission.user)
  userCommission: UserCommission[]; 
  @OneToMany(() => CommissionAssignment, commissionAssignment => commissionAssignment.user)
  commissionAssignment: CommissionAssignment[]; 
  @OneToMany(() => SalesTarget, salesTarget => salesTarget.user)
  salesTargets: SalesTarget[]; 



  
}
