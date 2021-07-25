import * as JwtType from './jwt.type';

/**
 * 환경변수에서 불러옴
 */
const { JWT_PRIVATE_KEY }: NodeJS.ProcessEnv = process.env;

/**
 * JWT 관련 상수
 */
export const jwtConstants = {
  /**
   * 개인 키
   */
  privateKey: Buffer.from(JWT_PRIVATE_KEY, 'base64').toString(),

  /**
   * 키 ID
   *
   * TODO: 현재는 base64로 인코딩 된 문자열의 앞 6자리를 사용하는데, 중복 된 경우가 발생하고 있어서 다른 방식의 ID로 변경해야 됨
   */
  keyId: String(JWT_PRIVATE_KEY).slice(0, 6),

  /**
   * JWT 생성 시 사용하는 알고리즘
   */
  algorithm: 'RS256' as JwtType.Algorithm,

  /**
   * JWT 종류
   */
  type: 'RSA',

  /**
   * JWT 용도 (서명)
   */
  use: 'sig' as JwtType.Use,

  /**
   * 만료 시간
   */
  expiresIn: '7d',
};
