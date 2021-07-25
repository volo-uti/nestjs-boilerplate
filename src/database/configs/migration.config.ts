import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PROJECT_ROOT, config as baseConfig } from '@/database/configs/orm.config';

/**
 * TypeORM을 이용한 Migration 시 사용하는 설정
 */
const config: TypeOrmModuleOptions = {
  ...baseConfig,
  migrations: [`${PROJECT_ROOT}/database/migrations/**/*.ts`],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  migrationsTableName: 'Migrations',
};

export = config;
