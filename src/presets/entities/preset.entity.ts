import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { jsonProperty, jsonIgnore, Serializable} from "ts-serializable";

@Entity()
export class Preset extends Serializable {
  @jsonProperty(String)	
  @PrimaryGeneratedColumn()
  id: string;

  @jsonProperty(String)
  @Column({unique: true})
  options: string;
}