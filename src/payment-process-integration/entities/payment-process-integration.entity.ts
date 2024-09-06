import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PaymentProcessIntegration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentRecord: string; // Registro de Pagos a Proveedores

  @Column()
  invoiceManagement: string; // Gestión de Facturas

  @Column()
  financialTransactionRecord: string; // Registro de Transacciones Financieras

  @Column()
  bankReconciliation: string; // Conciliación Bancaria

  @Column()
  financialReportGeneration: string; // Generación de Informes Financieros

  @Column()
  accountsPayableManagement: string; // Gestión de Cuentas por Pagar

  @Column()
  cashFlowForecast: string; // Flujo de Caja y Pronóstico Financiero

  @Column()
  depreciationAmortizationRecord: string; // Registro de Depreciación y Amortización

  @Column()
  taxComplianceManagement: string; // Gestión de Impuestos y Cumplimiento Regulatorio

  @Column()
  accessControlSecurity: string; // Seguridad y Control de Acceso

  @ManyToOne(() => Supplier, (supplier) => supplier.paymentProcessIntegrations)
  supplier: Supplier;
}
