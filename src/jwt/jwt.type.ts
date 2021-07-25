/**
 * JWT 사용 용도 (서명, 인코딩)
 */
export type Use = 'sig' | 'enc';

/**
 * JWT 알고리즘 종류
 */
export type Algorithm =
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'none';
