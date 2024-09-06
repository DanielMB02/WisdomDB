import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Inventory } from './inventory.entity';
import { Product } from 'src/product/entities/product.entity';
import { Client } from 'src/client/entities/client.entity';
import { User } from 'src/users/entities/user.entity';
import { StoreTransference } from './store-transference.entity';

@Entity({ name: 'stores' })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string; //Nombre de almacén
  @Column()
  address: string; //Dirección de almacén
  @Column()
  storage: string; //Capacidad de almacenamiento
  @Column('text', { array: true, nullable: true })
  gps: string[]; //GPS del almacén (Latitud y longitud)
  @Column()
  security: string; //Información de seguridad

  //Control de inventario
  @OneToMany(() => Inventory, inventory => inventory.store)
  inventories: Inventory[]; //Inventarios asociados al almacén

  @OneToMany(() => Product, product => product.store)
  products: Product[]; //Productos asociados al almacén

  @OneToMany(() => Client, client => client.store)
  clients: Client[]; //Clientes asociados al almacén

  @ManyToOne(() => User, (user) => user.store)
  user: User; // Responsable del almacén

  @OneToMany(() => StoreTransference, storeTransference => storeTransference.store)
  storeTransference: StoreTransference[]; // Transferencias de almacén


}