import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configs/orm.config';

/**
 * 데이터베이스 모듈
 */
@Module({
  imports: [TypeOrmModule.forRoot(config)],
  providers: [DatabaseService],
})
export class DatabaseModule {
  constructor() {}
}
