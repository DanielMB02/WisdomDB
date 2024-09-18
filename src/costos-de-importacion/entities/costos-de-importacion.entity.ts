import { Compra } from 'src/compras/entities/compra.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('costos_de_importacion')
export class CostosDeImportacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costoDeProducto: number; //Costo de los productos

  @Column('decimal', { precision: 10, scale: 2 })
  gastosDeEnvioYLogistica: number; //Gastos de envío y logística

  @Column('decimal', { precision: 10, scale: 2 })
  arancelesYTasasAduana: number; //Aranceles y tasas de Aduanas

  @Column('decimal', { precision: 10, scale: 2 })
  impuestosDeImportacion: number; //Impuestos sobre importaciones

  @Column('decimal', { precision: 10, scale: 2 })
  cargosCorretajeYDespachoAduanero: number; //Cargos de corretaje y despacho aduanero

  @Column('decimal', { precision: 10, scale: 2 })
  costosAlmacenamientoYManipulacion: number; //Costos de almacenamiento y manipulación

  @Column('decimal', { precision: 10, scale: 2 })
  otrosGastos: number; //Otros gastos asociados

  @Column('decimal', { precision: 10, scale: 2 })
  totalCostosImportacion: number; //Total costos de importación

  @ManyToOne(() => Compra, compra => compra.costosDeImportacion)
  compra: Compra;

  @Column('text', { array: true, nullable: true })
  informesFinancieros: string[]; //Informes financieros
}
