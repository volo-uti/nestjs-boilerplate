import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt.constant';
import { JwtPayloadDto } from './jwt.dto';

/**
 * Passport Strategy를 이용해서 JWT 검증 로직 정의
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * 생성자
   *
   * passport-jwt 에서 제공하는 설정 사용
   */
  constructor() {
    super({
      /**
       * JWT 추출 위치 (Authorization Header의 Bearer Token)
       */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      /**
       * 만료 무시 여부
       */
      ignoreExpiration: false,

      /**
       * 검증을 위한 개인키, 공개키 또는 암호 문자열
       */
      secretOrKey: jwtConstants.privateKey,

      /**
       * 암호화 알고리즘
       */
      algorithms: [jwtConstants.algorithm],
    });
  }

  /**
   * 검증하는 과정
   * @param payload
   */
  async validate(payload: JwtPayloadDto) {
    // TODO: 현재는 JWT 자체에 대한 검증 만 진행하고 있는데, 필요할 경우 payload에 들어 있는 사용자 정보가 실제로 유효(회원 정보 존재)한지도 체크해야 된다.
    return payload;
  }
}
