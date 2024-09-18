import { CostosDeCompra } from 'src/compras/entities/costos-de-compra.entity';
import { EnviosYRecepciones } from 'src/envios-recepciones/entities/envios-recepciones.entity';
import { IntegracionDeProcesosDePago } from 'src/proceso-de-pagos-y-contabilidad/entities/proceso-de-pagos-y-contabilidad.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { preferredCurrency, supplierType } from '../enums/supplier.enum';
import { Transaccion } from './transaccion.entity';
import { Compra } from 'src/compras/entities/compra.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity({ name: 'proveedores' })
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: supplierType,
  })
  tipoProveedor: supplierType; //Tipo de proveedor (Local o Extranjero)
  @Column({ length: 60 })
  nombre: string; //Nombre del proveedor
  @Column({ length: 60 })
  nombreContactoPrincipal: string; //Nombre del contacto principal
  @Column({ length: 20 })
  codigo: string; //Código del proveedor
  @Column({ length: 30 })
  razonSocial: string; //Razón social
  @Column()
  nit: string; //Número de identificación fiscal (NIF)/NIT
  @Column()
  cargoDelContacto: string; //Cargo del contacto en la empresa
  @Column()
  pais: string; //País
  @Column()
  ciudad: string; //Ciudad
  @Column('text', { array: true, nullable: true })
  telefono: string[]; //Teléfonos del proveedor
  @Column()
  email: string; //Correo electrónico
  @Column()
  terminosDePago: string; //Términos de pago
  @Column({ //Crear entidades
    type: 'enum',
    enum: preferredCurrency,
  })
  monedaPreferida: preferredCurrency; //Moneda preferida
  @Column()
  direccion: string; //Dirección
  @Column()
  paginaWeb: string; //Página web

  //Información Bancaria
  @Column()
  nombreDelBanco: string; //Nombre del Banco
  @Column()
  numeroDeCuenta: string; //Número de cuenta
  @Column()
  tipoDeCuenta: string; //Tipo de cuenta
  @Column()
  codigoSwift: string; //Código Swift
  
  @OneToMany(() => Transaccion, transaccion => transaccion.proveedor)
  transacciones: Transaccion[]; //Historial de transacciones
  @OneToMany(() => Compra, compra => compra.proveedor)
  compras: Compra[]; 
  @OneToMany(() => EnviosYRecepciones, envios => envios.proveedor)
  envios: EnviosYRecepciones[]; 
  @OneToMany(() => Producto, producto => producto.proveedor)
  productos: Producto[]; 
  @OneToMany(() => CostosDeCompra, costosDeCompra => costosDeCompra.proveedor)
  costosDeCompra: CostosDeCompra[];
  @OneToMany(() => IntegracionDeProcesosDePago, integracionDeProcesosDePago => integracionDeProcesosDePago.proveedor)
  integracionDeProcesosDePago: IntegracionDeProcesosDePago[]; 

  // @Column('text', { array: true, nullable: true })
  // documentacionRelevante: string[]; //Documentación importante

}
