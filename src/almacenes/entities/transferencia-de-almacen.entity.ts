import { Producto } from 'src/productos/entities/producto.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Almacen } from './almacen.entity';

@Entity()
export class TransferenciaDeAlmacen {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  transferDate: Date; //fecha de transferencia

  @Column()
  origen: string; //Origuen de transferencia
 
  @Column()
  destino: string; //Destino de transferencia

  @OneToMany(() => Producto, (producto) => producto.transferenciaDeAlmacen)
  productos: Producto[]; //productos transferidos

  @ManyToOne(() => Almacen, (almacen) => almacen.transferenciaDeAlmacen)
  almacen: Almacen; // Almacén asignado
}
