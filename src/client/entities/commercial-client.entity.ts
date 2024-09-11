import { Entity, Column, ChildEntity } from 'typeorm';
import { Client } from './client.entity';
import { CommercialSize, CommercialType } from '../enums/client.enum';

//@Entity()
@ChildEntity()
export class CommercialClient extends Client {
  @Column()
  representativePhone: string; //Teléfono del representante legal
  @Column()
  email: string; //Email del representante o comercial
  @Column()
  administrator: string; //administrador o encargado de la comercial
  @Column()
  representativeName: string; //Nombre del representante legal
  @Column()
  administratorPhone: string; //Teléfono del administrador o encargado de comercial
  @Column('text', { array: true, nullable: true })
  gps: string[]; //gps(Latitud y longitud)
  @Column({ type: 'text', nullable: true })
  photo: String; //Foto de oficina constructora

  @Column({
    type: 'enum',
    enum: CommercialSize,
  })
  size: CommercialSize; // Tamaño comercial, puede ser: VIP, Mayorista o Minorista

  @Column({
    type: 'enum',
    enum: CommercialType,
  })
  type: CommercialType;// Tipo comercial, puede ser A, B o C

}
