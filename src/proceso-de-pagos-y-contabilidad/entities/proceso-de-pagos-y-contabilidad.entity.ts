import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class IntegracionDeProcesosDePago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registroDePagosAProveedores: string; // Registro de Pagos a Proveedores

  @Column()
  gestionDeFacturas: string; // Gestión de Facturas

  @Column()
  registroDeTransaccionesFinancieras: string; // Registro de Transacciones Financieras

  @Column()
  conciliacionBancaria: string; // Conciliación Bancaria

  @Column()
  generacionDeInformesFinancieros: string; // Generación de Informes Financieros

  @Column()
  gestionDeCuentasPorPagar: string; // Gestión de Cuentas por Pagar

  @Column()
  flujoDeCajaYPornosticoFinanciero: string; // Flujo de Caja y Pronóstico Financiero

  @Column()
  registroDeDepreciacionYAmortizacion: string; // Registro de Depreciación y Amortización

  @Column()
  gestionDeImpuestosYCumplimientoRegulatorio: string; // Gestión de Impuestos y Cumplimiento Regulatorio

  @Column()
  seguridadYControlDeAccesos: string; // Seguridad y Control de Acceso

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.integracionDeProcesosDePago)
  proveedor: Proveedor;
}
