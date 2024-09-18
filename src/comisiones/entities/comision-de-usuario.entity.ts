import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ComisionDeUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  comisionIndividual: number; // Cálculo de Comisiones Individuales

  @Column('text')
  transparenciaYClaridad: string; // Transparencia y Claridad

  @ManyToOne(() => Usuario, (usuario) => usuario.comisionDeUsuario)
  usuario: Usuario; //Vendedor asignado
}
