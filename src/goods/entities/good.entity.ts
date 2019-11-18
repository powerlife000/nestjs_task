import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({unique: true})
  title: string;

  @Column({unique: true})
  description: string;

  @Column({nullable: true})
  provider: string;
  
  @Column({nullable: true})
  manufacturer: string;
  
  @Column({nullable: true})
  category: string;
  
  @Column({nullable: true})
  manufacture_date: string;
  
  @Column({nullable: true})
  country: string;
  
  @Column({nullable: true})
  created_at: string;
  
  @Column({nullable: true})
  updated_at: string;
}