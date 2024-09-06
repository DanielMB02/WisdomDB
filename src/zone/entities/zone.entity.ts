import { Client } from 'src/client/entities/client.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('zones')
export class Zone {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, length: 40 })
  name: string; //Nombre zona
  @Column({ length: 40 })
  start: string; //Inicio de la zona
  @Column({ length: 40 })
  end: string; //Final de la zona
  @Column({ length: 20 })
  code: string; //Código de la zona
  @Column()
  user: string; //Vendedor asignado a la zona
  @Column('text', { array: true, nullable: true })
  commercialName: string[]; //Comerciales que pertenecen a la zona
  @OneToMany(() => User, (user) => user.zone)
  users: User[]; //Una zona puede tener sólo una zona?
  @OneToMany(() => Client, (client) => client.zone)
  clients: Client[];
}
