import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class AsignacionDeComision {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  asignacionDeComision: string; // Asignación de Comisiones (No sé cómo se asignará la comisión)

  @Column('decimal')
  porcentajeDeComision: number; // Porcentajes de Comisión

  @ManyToOne(() => Usuario, (usuario) => usuario.asignacionDeComision)
  usuario: Usuario;
}
