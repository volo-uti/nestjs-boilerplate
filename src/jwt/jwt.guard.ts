import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JWT Guard
 *
 * passport 라이브러리의 AuthGuard를 사용해서 JwtGuard를 생성
 */
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}
