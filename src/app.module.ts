import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsModule } from './goods/goods.module';
import { Good } from './goods/entities/good.entity';
import { withCache } from './orm.config';

@Module({
  imports: [
	TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
	GoodsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
