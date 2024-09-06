import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { preferredCurrency, supplierType } from '../enums/supplier.enum';
import { Transaction } from './transaction.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Shipment } from 'src/shipment-receivement/entities/shipment-receivement.entity';
import { PaymentProcessIntegration } from 'src/payment-process-integration/entities/payment-process-integration.entity';
import { Product } from 'src/product/entities/product.entity';
import { PurchaseCost } from 'src/purchase/entities/purchase-costs.entity';

@Entity({ name: 'suppliers' })
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: supplierType,
  })
  supplierType: supplierType; //Tipo de proveedor (Local o Extranjero)
  @Column({ length: 60 })
  name: string; //Nombre del proveedor
  @Column({ length: 60 })
  contactFullname: string; //Nombre del contacto principal
  @Column({ length: 20 })
  code: string; //Código del proveedor
  @Column({ length: 30 })
  companyName: string; //Razón social
  @Column()
  nit: string; //Número de identificación fiscal (NIF)/NIT
  @Column()
  contactPosition: string; //Cargo del contacto en la empresa
  @Column()
  Country: string; //País
  @Column()
  region: string; //Ciudad
  @Column('text', { array: true, nullable: true })
  phone: string[]; //Teléfonos del proveedor
  @Column()
  email: string; //Correo electrónico
  @Column()
  paymentTerms: string; //Términos de pago
  @Column({ //Crear entidades
    type: 'enum',
    enum: preferredCurrency,
  })
  preferredCurrency: preferredCurrency; //Moneda preferida
  @Column()
  address: string; //Dirección
  @Column()
  website: string; //Página web

  //Información Bancaria
  @Column()
  bankName: string; //Nombre del Banco
  @Column()
  accountNumber: string; //Número de cuenta
  @Column()
  accountType: string; //Tipo de cuenta
  @Column()
  swift: string; //Código Swift
  
  @OneToMany(() => Transaction, transaction => transaction.supplier)
  transactions: Transaction[]; //Historial de transacciones
  @OneToMany(() => Purchase, purchase => purchase.supplier)
  purchases: Purchase[]; 
  @OneToMany(() => Shipment, shipping => shipping.supplier)
  shippings: Shipment[]; 
  @OneToMany(() => Product, product => product.supplier)
  products: Product[]; 
  @OneToMany(() => PurchaseCost, purchaseCost => purchaseCost.supplier)
  purchaseCosts: PurchaseCost[];
  @OneToMany(() => PaymentProcessIntegration, paymentProcessIntegration => paymentProcessIntegration.supplier)
  paymentProcessIntegrations: PaymentProcessIntegration[]; 

  // @Column('text', { array: true, nullable: true })
  // relevantDocumentation: string[]; //Documentación importante

}
