import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CajaChica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  montoDesembolsado: number; // Monto desembolsado (Podría aplicarse a gastos y compras)

  @Column()
  responsabilidadDelCustodio: string; // Responsabilidad del custodio

  @Column()
  supervisionyRegistro: string; // Supervisión y registro

  @Column()
  verificacionDeComprobantes: string; // Verificación de los comprobantes

  @Column()
  reabastecimientoyConciliacion: string; //Reabastecimiento y conciliación

  //Relación con Control de caja chica (No existe el control de caja chica)

}
