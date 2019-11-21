import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Preset } from '../../entities/preset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm'


@Injectable()
export class PresetsService extends TypeOrmCrudService<Preset>{
  //presetsRepository: Repository<Preset>;
  constructor(
  @InjectRepository(Preset) 
  presetsRepository: Repository<Preset>,
  ){
    super(presetsRepository);
  }
  
  /*async findAll(): Promise<Preset[]> {
    return await this.presetsRepository.find();
  }
  
  async  create(data: Preset): Promise<Preset> {
        return await this.presetsRepository.save(data);
    }
	
  async  findPreset(id): Promise<Preset[]> {
        return await this.presetsRepository.find(id);
    }*/
  
  /*async  create(data: Preset): Promise<Preset> {
        return await this.presetsRepository.save(data);
    }
	
  async  findAll(): Promise<Preset[]> {
        return await this.presetsRepository.find();
    }
	
  async  findOne(id): Promise<Preset[]> {
        return await this.presetsRepository.find(id);
    }*/
}