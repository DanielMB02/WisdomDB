import { Cliente } from "src/clientes/entities/cliente.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('devoluciones')
export class Devolucion {
    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    fechaDevolucion: Date;

    @Column()
    motivo: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.devoluciones)
    cliente: Cliente; //Cliente que realiza la devolución

    @OneToMany(() => Producto, (producto) => producto.devoluciones)
    productos: Producto[]; //Productos devueltos
    
}
