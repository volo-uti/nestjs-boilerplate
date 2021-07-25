import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './jwt.constant';

/**
 * Nest에서 제공하는 JwtModule에 JWT 설정을 등록
 * JwtModule과 이름이 동일하여 NestJwtModule로 이름을 변경하여 사용 중
 */
const NestJwtModuleRegister = NestJwtModule.register({
  privateKey: jwtConstants.privateKey,
  signOptions: { algorithm: jwtConstants.algorithm, expiresIn: jwtConstants.expiresIn },
});

/**
 * Passport 설정을 등록
 */
const PassportModuleRegister = PassportModule.register({ defaultStrategy: 'jwt' });

/**
 * JWT 모듈
 */
@Module({
  imports: [PassportModuleRegister, NestJwtModuleRegister],
  providers: [JwtStrategy],
  exports: [PassportModuleRegister, NestJwtModuleRegister],
})
export class JwtModule {}
