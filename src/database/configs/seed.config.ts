import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PROJECT_ROOT, config as baseConfig } from '@/database/configs/orm.config';

/**
 * TypeORM을 이용한 Seeding 시 사용하는 설정
 */
const config: TypeOrmModuleOptions = {
  ...baseConfig,
  migrations: [`${PROJECT_ROOT}/database/seeds/**/*.ts`],
  cli: {
    migrationsDir: 'src/database/seeds',
  },
  migrationsTableName: 'Seeds',
};

export = config;
