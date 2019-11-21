import { Module } from '@nestjs/common';
import { PresetsController } from './controllers/presets/presets.controller';
import { PresetsService } from './services/presets/presets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preset } from './entities/preset.entity';
//import { GoodsService } from '../goods/services/goods/goods.service';

@Module({
  controllers: [PresetsController],
  providers: [PresetsService],
  exports: [PresetsService],
  imports: [TypeOrmModule.forFeature([Preset])]
})
export class PresetsModule {}
