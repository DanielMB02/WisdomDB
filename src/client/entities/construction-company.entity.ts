import { Entity, Column, ChildEntity } from 'typeorm';
import { Client } from './client.entity';

//@Entity()
@ChildEntity()
export class ConstructionClient extends Client {
  @Column()
  projectName: string; //Nombre del proyecto
  @Column()
  representativeName: string; //Nombre del representante legal
  @Column()
  projectNit: string; //Nit del proyecto
  @Column()
  projectNitName: string; //Nombre en nit del proyecto
  @Column('text', { array: true, nullable: true })
  gps: string[]; //gps(Latitud y longitud)
  @Column({ type: 'text', nullable: true })
  photo: String; //Foto de oficina constructora
}
