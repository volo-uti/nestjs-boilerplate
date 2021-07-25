import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { postgresConstants } from '@/constants/database.constant';

/**
 * 프로젝트 루트 디렉토리
 */
export const PROJECT_ROOT = `${__dirname}/../..`;

/**
 * TypeORM 공통 사용 설정
 */
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: postgresConstants.host,
  port: postgresConstants.port,
  username: postgresConstants.user,
  password: postgresConstants.password,
  database: postgresConstants.db,
  entities: [`${PROJECT_ROOT}/**/*.entity.ts`],
  synchronize: false,
};
