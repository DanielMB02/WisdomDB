import { Entity, Column, ChildEntity } from 'typeorm';
import { Cliente } from './cliente.entity';

//@Entity()
@ChildEntity()
export class ClienteConstructora extends Cliente {
  @Column()
  nombreProyecto: string; //Nombre del proyecto
  @Column()
  nombreRepresentanteLegal: string; //Nombre del representante legal
  @Column()
  nitDeProyecto: string; //Nit del proyecto
  @Column()
  nombreNitProyecto: string; //Nombre en nit del proyecto
  @Column({ array: true, nullable: true })
  gps: string[]; //gps(Latitud y longitud)
  @Column({ nullable: true })
  fotoOficina: String; //Foto de oficina constructora
}
