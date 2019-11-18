import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const withCache: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  migrations: ["migrations/**/*.ts"],
  subscribers: ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  entities: [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  cli: {
	  entitiesDir: 'src',
	  migrationsDir: 'migrations',
	  subscribersDir: 'subscriber'
  }
};
