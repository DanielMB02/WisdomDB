import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from './compra.entity';

@Entity({ name: 'costos_de_compra' })
export class CostosDeCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fechaDeCompra: Date; //Fecha de la compra

  @Column()
  producto: string; //Producto adquirido

  @ManyToOne(() => Proveedor, proveedor => proveedor.costosDeCompra)
  proveedor: Proveedor; //Proveedor

  @Column()
  cantidad: number; //Cantidad adquirida

  @Column()
  precioUnitario: number; //Precio unitario

  @Column()
  total: number; //Total de la compra

  @Column()
  impuestosLocales: number;//Impuestos locales

  @Column()
  gastosDeEnvioInternos: number; //Gastos de envío internos

  @Column()
  totalPagado: number; //Total pagado

  @Column()
  metodoDePago: number; //Método de pago

  @OneToMany(() => Compra, compra => compra.costosDeCompra)
  compra: Compra[];

}