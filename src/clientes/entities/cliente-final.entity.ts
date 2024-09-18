import { ChildEntity, Entity } from 'typeorm';
import { Cliente } from './cliente.entity';

//@Entity()
@ChildEntity()
export class ClienteFinal extends Cliente {
  //Hereda todos los campos de Client
}
