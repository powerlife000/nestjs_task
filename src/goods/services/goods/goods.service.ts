import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Good } from '../../entities/good.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class GoodsService extends TypeOrmCrudService<Good>{
  constructor(@InjectRepository(Good) goodsRepository: Repository<Good>){
    super(goodsRepository);
  }
}