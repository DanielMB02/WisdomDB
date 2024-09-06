import { Category } from 'src/category/entities/category.entity';
import { ProductCommission } from 'src/commissions/entities/product-commision.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ReturnEntity } from 'src/returns/entities/return.entity';
import { Inventory } from 'src/store/entities/inventory.entity';
import { ProductMovement } from 'src/store/entities/product-movement.entity';
import { StoreTransference } from 'src/store/entities/store-transference.entity';
import { Store } from 'src/store/entities/store.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; //Nombre del producto

  @Column()
  description: string; //Descripción del producto

  @Column()
  code: string; //Código del producto

  @ManyToOne(() => Category, (category) => category.products)
  category: Category; //Categoría del producto

  @Column()
  unitPrice: number; //Precio unitario del producto

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;

  @Column()
  stock: number; //Nombre del producto

  @Column()
  taxesInfo: string; //Información de impuestos

  @Column()
  measureUnit: string; //Unidad de medida

  @ManyToOne(() => Store, store => store.products)
  store: Store;

  @ManyToOne(() => StoreTransference, storeTransference => storeTransference.products)
  storeTransference: StoreTransference;

  @ManyToOne(() => Discount, (discount) => discount.products)
  discount: Discount; //descuento asociado al producto

  //@ManyToOne(() => ReturnEntity, (returns) => returns.products)
  //returns: ReturnEntity; //Devolución asociada al producto

  @ManyToOne(() => Inventory, (inventory) => inventory.products)
  inventory: Inventory; //Inventario

  @ManyToOne(() => ProductMovement, (productMovement) => productMovement.products)
  productMovement: ProductMovement; //Movimiento de productos (Entrada o salida)

  @ManyToOne(() => ProductCommission, (productCommission) => productCommission.products)
  productCommission: ProductCommission; //Devolución asociada al producto
  
}
