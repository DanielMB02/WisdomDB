import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('zonas')
export class Zona {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, length: 40 })
  nombre: string; //Nombre zona
  @Column({ length: 40 })
  inicio: string; //Inicio de la zona
  @Column({ length: 40 })
  final: string; //Final de la zona
  @Column({ length: 20 })
  codigo: string; //Código de la zona
  // @Column()
  // usuario: string; //Vendedor asignado a la zona
  @Column('text', { array: true, nullable: true })
  nombreComercial: string[]; //Comerciales que pertenecen a la zona
  @OneToMany(() => Usuario, (usuario) => usuario.zona)
  usuarios: Usuario[]; //Una zona puede tener sólo una zona?
  @OneToMany(() => Cliente, (cliente) => cliente.zona)
  clientes: Cliente[];
}
