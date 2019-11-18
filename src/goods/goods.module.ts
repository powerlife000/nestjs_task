import { Module } from '@nestjs/common';
import { GoodsController } from './controllers/goods/goods.controller';
import { GoodsService } from './services/goods/goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from './entities/good.entity';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  exports: [GoodsService],
  imports: [TypeOrmModule.forFeature([Good])]
})
export class GoodsModule {}
