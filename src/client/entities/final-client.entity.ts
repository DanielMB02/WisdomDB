import { ChildEntity, Entity } from 'typeorm';
import { Client } from './client.entity';

//@Entity()
@ChildEntity()
export class FinalClient extends Client {
    //Hereda todos los campos de Client
}
