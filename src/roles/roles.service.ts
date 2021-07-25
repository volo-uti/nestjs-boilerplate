import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Role } from './role.entity';
import * as RolesType from './roles.type';

/**
 * 사용자 역할 서비스
 */
@Injectable()
export class RolesService {
  /**
   * 생성자
   * @param rolesRepository
   */
  constructor(@InjectRepository(Role) private rolesRepository: Repository<Role>) {}

  /**
   * 이름 배열로 Role 찾기
   * @param names
   */
  async findByNames(names: RolesType.Name[]): Promise<Role[]> {
    return this.rolesRepository.find({ name: In(names) });
  }
}
