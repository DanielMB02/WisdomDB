import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from './inventario.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TransferenciaDeAlmacen } from './transferencia-de-almacen.entity';

@Entity({ name: 'almacenes' })
export class Almacen {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string; //Nombre de almacén
  @Column()
  direccion: string; //Dirección de almacén
  @Column()
  capacidad: string; //Capacidad de almacenamiento
  @Column('text', { array: true, nullable: true })
  gps: string[]; //GPS del almacén (Latitud y longitud)
  @Column()
  seguridad: string; //Información de seguridad
  @OneToMany(() => Inventario, (inventario) => inventario.almacen)
  inventarios: Inventario[]; //Inventarios asociados al almacén
  @OneToMany(() => Producto, (producto) => producto.almacen)
  producto: Producto[]; //Productos asociados al almacén
  @OneToMany(() => Cliente, (cliente) => cliente.almacen)
  clientes: Cliente[]; //Clientes asociados al almacén
  @ManyToOne(() => Usuario, (usuario) => usuario.almacen)
  usuario: Usuario; // Responsable del almacén
  @OneToMany(
    () => TransferenciaDeAlmacen,
    (transferenciaDeAlmacen) => transferenciaDeAlmacen.almacen,
  )
  transferenciaDeAlmacen: TransferenciaDeAlmacen[]; // Transferencias de almacén
}
