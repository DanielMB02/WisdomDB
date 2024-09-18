import { ComisionDeUsuario } from 'src/comisiones/entities/comision-de-usuario.entity';
import { AsignacionDeComision } from 'src/comisiones/entities/comision.entity';
import { ObjetivoDeVentas } from 'src/comisiones/entities/objetivo-de-ventas.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enums/user.enum';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Almacen } from 'src/almacenes/entities/almacen.entity';
import { Zona } from 'src/zonas/entities/zona.entity';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 60, nullable: true })
  nombreCompleto: string; //Nombre completo
  @Column({nullable: true})
  ci: string; //Carnet de identidad
  @Column({ unique: true, length: 60 })
  email: string; //Email, no aparece en la creación del vendedor
  @Column({ length: 200 })
  contrasenia: string; //Contraseña, no aparece en la creación del vendedor
  @Column()
  codigo: string; //Código del vendedor
  @Column()
  telefono: string; //Número de teléfono del vendedor
  @Column()
  direccion: string; //Dirección de la casa del vendedor
  @Column('text', { array: true, nullable: true })
  gps: string[]; //GPS de vendedor (Latitud y longitud)
  // @Column({ nullable: true })
  // comision: number; //Comisión
  @Column({ type: 'text', nullable: true })
  fotoCasa: String; //Foto de la casa del vendedor
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fechaCreacion: Date; //Fecha de creación de la cuenta
  @Column({ type: 'boolean', default: () => 'true' })
  status: boolean; //Estado
  @Column({
    type: 'enum',
    enum: UserRole,
  })
  rol: UserRole; // Rol de usuario, puede ser: Administrador, Vendedor, Almacenero o Encargado
  @Column()
  nombreCompletoDeFamiliar: string; //Nombre completo de un familiar cercano
  @Column()
  direccionDeFamiliar: string; //Dirección del familiar
  @Column()
  telefonoFamiliar: string; //Número de teléfono del familiar
  @Column('text', { array: true, nullable: true })
  gpsFamiliar: string[]; //GPS de familiar (Latitud y longitud)
  @Column({ type: 'text', nullable: true })
  fotoCasaFamiliar: String; //Foto de la casa del familiar
  @OneToMany(() => Venta, venta => venta.usuario)
  ventas: Venta[]; 
  @OneToMany(() => Almacen, almacen => almacen.usuario)
  almacen: Almacen[]; 
  @ManyToOne(() => Zona, (zona) => zona.usuarios)
  zona: Zona; //Zona asignada, tomando en cuenta que una zona tiene varios vendedores

  //Comisiones

  @OneToMany(() => ComisionDeUsuario, comisionDeUsuario => comisionDeUsuario.usuario)
  comisionDeUsuario: ComisionDeUsuario[]; 
  @OneToMany(() => AsignacionDeComision, asignacionDeComision => asignacionDeComision.usuario)
  asignacionDeComision: AsignacionDeComision[]; 
  @OneToMany(() => ObjetivoDeVentas, objetivoDeVentas => objetivoDeVentas.usuario)
  objetivoDeVentas: ObjetivoDeVentas[]; 



  
}
