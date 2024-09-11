import { Category } from 'src/category/entities/category.entity';
import { Shade } from 'src/category/entities/shade.entity';
import { Type } from 'src/category/entities/type.entity';
import { ProductCommission } from 'src/commissions/entities/product-commision.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ReturnEntity } from 'src/returns/entities/return.entity';
import { Inventory } from 'src/store/entities/inventory.entity';
import { ProductMovement } from 'src/store/entities/product-movement.entity';
import { StoreTransference } from 'src/store/entities/store-transference.entity';
import { Store } from 'src/store/entities/store.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Factory } from './factory.entity';
import { PurchaseDetail } from 'src/purchase/entities/purchase-detail.entity';
import { SaleDetail } from 'src/sale/entities/sale-details.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // origin: string; //Procedencia del producto

  // @Column()
  // factory: string; //Fábrica

  @ManyToOne(() => Factory, (factory) => factory.products)
  factory: Factory; //Categoría o clase del producto

  @Column()
  format: string; //Formato(Medida) del producto

  @Column()
  code: string; //Código del producto

  @ManyToOne(() => Category, (category) => category.products)
  category: Category; //Categoría o clase del producto

  @ManyToOne(() => Type, (type) => type.products)
  type: Type; //Tipo 

  @ManyToOne(() => Shade, (shade) => shade.products)
  shade: Shade; //Tono 

  @Column('decimal')
  unitPrice: number; //Precio unitario del producto

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;

  // @Column()
  // stock: number; //stock del producto

  @Column()
  Description: string; //Descripción

  @Column()
  piecesPerBox: number; //Piezas por caja

  @Column()
  boxesPerPallet: number; //Cajas por pallets

  @Column()
  numberOfBoxes: number; //Número de cajas

  @Column()
  numberOfPallets: number; //Número de pallets

  @ManyToOne(() => Store, store => store.products)
  store: Store;

  @ManyToOne(() => StoreTransference, storeTransference => storeTransference.products)
  storeTransference: StoreTransference;

  @ManyToOne(() => Discount, (discount) => discount.products)
  discount: Discount; //descuento asociado al producto

  @ManyToOne(() => ReturnEntity, (returns) => returns.products)
  returns: ReturnEntity; //Devolución asociada al producto

  @ManyToOne(() => Inventory, (inventory) => inventory.products)
  inventory: Inventory; //Inventario

  @ManyToOne(() => ProductMovement, (productMovement) => productMovement.products)
  productMovement: ProductMovement; //Movimiento de productos (Entrada o salida)

  @ManyToOne(() => ProductCommission, (productCommission) => productCommission.products)
  productCommission: ProductCommission; //Comisión del producto

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.product)
  purchaseDetails: PurchaseDetail[]; //Detalle de compras

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.product)
  saleDetails: SaleDetail[]; //Detalle de ventas
  
}
