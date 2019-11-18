import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { Serialize, Serializable} from "ts-serialize";
import { jsonProperty, jsonIgnore, Serializable} from "ts-serializable";

@Entity()
export class Good extends Serializable {
  @jsonProperty(String)	
  @PrimaryGeneratedColumn()
  id: string;

  @jsonProperty(String)
  @Column({unique: true})
  title: string;
  
  @jsonProperty(String)
  @Column({unique: true})
  description: string;

  @jsonProperty(String)
  @Column({nullable: true})
  provider: string;
  
  @jsonProperty(String)
  @Column({nullable: true})
  manufacturer: string;
  
  @jsonProperty(String)
  @Column({nullable: true})
  category: string;
  
  @jsonProperty(String)
  @Column({nullable: true})
  manufacture_date: string;
  
  @jsonProperty(String)
  @Column({nullable: true})
  country: string;
  
  //@jsonIgnore() //Не показываем поле
  @jsonProperty(String)
  @Column({nullable: true})
  created_at: string;
  
  @jsonProperty(String)
  @Column({nullable: true})
  updated_at: string;
}