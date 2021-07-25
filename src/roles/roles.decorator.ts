import { SetMetadata } from '@nestjs/common';

/**
 * 사용자 역할을 지정하는 데코레이터
 * @param roles 사용자 역할 이름. 콤마(,)로 구분하여 입력
 * @constructor
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
