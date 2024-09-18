import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ObjetivoDeVentas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ObjetivoDeVentas: number; // Establecimiento de Objetivos de Venta (podría ser un número de ventas o un monto establecido)

  @Column()
  seguimientoDeDesempeño: string; // Seguimiento del Desempeño (Podría ser una comparación entre las ventas y la meta de ventas)

  @ManyToOne(() => Usuario, (usuario) => usuario.objetivoDeVentas)
  usuario: Usuario;
}
