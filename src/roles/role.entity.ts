import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * 사용자 역할 테이블
 */
@Entity('Roles')
export class Role {
  /**
   * 인덱스
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 역할명
   */
  @Column()
  name: string;

  /**
   * 설명
   */
  @Column({ nullable: true })
  description!: string;

  /**
   * 생성 일시
   */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone', default: 'NOW()' })
  createdAt: Date;

  /**
   * 갱신 일시
   */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone', onUpdate: 'NOW()', default: 'NOW()' })
  updatedAt: Date;

  /**
   * 활성화 여부
   */
  @Column({ default: true })
  enabled: boolean;
}
