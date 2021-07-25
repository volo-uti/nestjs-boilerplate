import * as RolesType from '@/roles/roles.type';

/**
 * JWT 디코딩 후 Payload DTO
 */
export interface JwtPayloadDto {
  /**
   * 사용자 인덱스
   */
  sub: number;

  /**
   * 사용자 역할 배열
   */
  roles: RolesType.Name[];

  /**
   * 발행 일시 (Unix Time)
   */
  iat?: number;

  /**
   * 만료 일시 (Unix Time)
   */
  exp?: number;
}
