import { Categoria } from "src/categorias/entities/categoria.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Venta } from "src/ventas/entities/venta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('descuentos')
export class Descuento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    porcentajeDeDescuento: number; //Porcentaje del descuento aplicado

    @Column()
    condiciones: string; //Condiciones del descuento

    @Column()
    fechaDeExpiracion: Date; //Vigencia del descuento (Fecha de expiración)

    @OneToMany(() => Cliente, cliente => cliente.descuento)
    clientes: Cliente[]; 

    @OneToMany(() => Categoria, categoria => categoria.descuento)
    categoria: Categoria[]; 

    @OneToMany(() => Producto, producto => producto.descuento)
    productos: Producto[];

    @OneToMany(() => Venta, venta => venta.descuento)
    ventas: Venta[];

}
