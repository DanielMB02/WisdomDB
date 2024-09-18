import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EnviosYRecepciones } from './envios-recepciones.entity';

@Entity({ name: 'reclamos_y_devoluciones' })
export class Reclamos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  detalles: string; //Detalles del reclamo
  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fechaDeEmision: Date; //Fecha de emisión
  @ManyToOne(() => EnviosYRecepciones, envio => envio.reclamos)
  envio: EnviosYRecepciones;

}