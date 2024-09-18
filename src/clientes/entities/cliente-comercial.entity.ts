import { Entity, Column, ChildEntity } from 'typeorm';
import { CommercialSize, CommercialType } from '../enums/client.enum';
import { Cliente } from './cliente.entity';

//@Entity()
@ChildEntity()
export class ClienteComercial extends Cliente {
  @Column()
  telefonoRepresentante: string; //Teléfono del representante legal
  @Column()
  email: string; //Email del representante o comercial
  @Column()
  nombreAdministrador: string; //administrador o encargado de la comercial
  @Column()
  nombreRepresentanteLegal: string; //Nombre del representante legal
  @Column()
  telfonoAdministrador: string; //Teléfono del administrador o encargado de comercial
  @Column('text', { array: true, nullable: true })
  gps: string[]; //gps(Latitud y longitud)
  @Column({ type: 'text', nullable: true })
  fotoOficina: String; //Foto de oficina constructora

  @Column({
    type: 'enum',
    enum: CommercialSize,
  })
  TamanioComercial: CommercialSize; // Tamaño comercial, puede ser: VIP, Mayorista o Minorista

  @Column({
    type: 'enum',
    enum: CommercialType,
  })
  tipo: CommercialType; // Tipo comercial, puede ser A, B o C
}
